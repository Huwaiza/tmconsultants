"use client"

import { useState } from "react"
import { Calculator } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Tax slabs for salaried individuals for 2024-25 as per FBR Pakistan
const salarySlabs = [
  { min: 0, max: 600000, rate: 0, fixedTax: 0 },
  { min: 600001, max: 1200000, rate: 5, fixedTax: 0 },
  { min: 1200001, max: 2200000, rate: 15, fixedTax: 30000 },
  { min: 2200001, max: 3200000, rate: 25, fixedTax: 180000 },
  { min: 3200001, max: 4100000, rate: 30, fixedTax: 430000 },
  { min: 4100001, max: Number.POSITIVE_INFINITY, rate: 35, fixedTax: 700000 },
]

// Tax slabs for business individuals for 2024-25 as per FBR Pakistan
const businessSlabs = [
  { min: 0, max: 600000, rate: 0, fixedTax: 0 },
  { min: 600001, max: 1200000, rate: 15, fixedTax: 0 },
  { min: 1200001, max: 1600000, rate: 20, fixedTax: 90000 },
  { min: 1600001, max: 3200000, rate: 30, fixedTax: 170000 },
  { min: 3200001, max: 5600000, rate: 40, fixedTax: 650000 },
  { min: 5600001, max: Number.POSITIVE_INFINITY, rate: 45, fixedTax: 1610000 },
]

export function TaxCalculator() {
  const [income, setIncome] = useState<string>("")
  const [period, setPeriod] = useState<"monthly" | "yearly">("yearly")
  const [incomeType, setIncomeType] = useState<"salary" | "business">("salary")
  const [taxResult, setTaxResult] = useState<{
    taxAmount: number
    effectiveRate: number
    netIncome: number
    taxSlab: string
  } | null>(null)

  const calculateTax = () => {
    if (!income || isNaN(Number(income)) || Number(income) < 0) {
      return
    }

    let annualIncome = Number(income)
    if (period === "monthly") {
      annualIncome = annualIncome * 12
    }

    const slabs = incomeType === "salary" ? salarySlabs : businessSlabs
    let taxAmount = 0
    let taxSlab = ""

    for (const slab of slabs) {
      if (annualIncome > slab.min && annualIncome <= slab.max) {
        const taxableAmount = annualIncome - slab.min
        taxAmount = slab.fixedTax + (taxableAmount * slab.rate) / 100
        taxSlab = `PKR ${slab.min.toLocaleString()} to PKR ${
          slab.max === Number.POSITIVE_INFINITY ? "Above" : slab.max.toLocaleString()
        }`
        break
      }
    }

    const effectiveRate = (taxAmount / annualIncome) * 100
    const netIncome = annualIncome - taxAmount

    setTaxResult({
      taxAmount,
      effectiveRate,
      netIncome,
      taxSlab,
    })
  }

  const resetCalculator = () => {
    setIncome("")
    setTaxResult(null)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="bg-[#3a5a81] text-white rounded-t-lg">
        <div className="flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          <CardTitle>Pakistan Income Tax Calculator 2024-25</CardTitle>
        </div>
        <CardDescription className="text-gray-100">
          Calculate your income tax based on the latest FBR tax slabs
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="taxSlabs">Tax Slabs</TabsTrigger>
          </TabsList>
          <TabsContent value="calculator" className="space-y-4 pt-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="incomeType">Income Type</Label>
                <RadioGroup
                  id="incomeType"
                  value={incomeType}
                  onValueChange={(value) => setIncomeType(value as "salary" | "business")}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="salary" id="salary" />
                    <Label htmlFor="salary">Salaried</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="business" id="business" />
                    <Label htmlFor="business">Business</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="period">Income Period</Label>
                <RadioGroup
                  id="period"
                  value={period}
                  onValueChange={(value) => setPeriod(value as "monthly" | "yearly")}
                  className="flex space-x-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">Monthly</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yearly" id="yearly" />
                    <Label htmlFor="yearly">Yearly</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="income">
                  {period === "monthly" ? "Monthly" : "Annual"} {incomeType === "salary" ? "Salary" : "Business Income"}
                </Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">PKR</span>
                  <Input
                    id="income"
                    type="number"
                    placeholder="Enter amount"
                    className="pl-12"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex space-x-2 pt-2">
                <Button onClick={calculateTax} className="bg-[#3a5a81] hover:bg-[#2c4a6b]">
                  Calculate Tax
                </Button>
                <Button variant="outline" onClick={resetCalculator}>
                  Reset
                </Button>
              </div>
            </div>

            {taxResult && (
              <div className="mt-6 space-y-4 border rounded-lg p-4 bg-gray-50">
                <h3 className="text-lg font-semibold text-[#3a5a81]">Tax Calculation Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Tax Slab</p>
                    <p className="font-medium">{taxResult.taxSlab}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Annual Taxable Income</p>
                    <p className="font-medium">
                      PKR{" "}
                      {period === "monthly" ? (Number(income) * 12).toLocaleString() : Number(income).toLocaleString()}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Annual Tax Amount</p>
                    <p className="font-medium text-[#e63946]">PKR {Math.round(taxResult.taxAmount).toLocaleString()}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Monthly Tax</p>
                    <p className="font-medium text-[#e63946]">
                      PKR {Math.round(taxResult.taxAmount / 12).toLocaleString()}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Effective Tax Rate</p>
                    <p className="font-medium">{taxResult.effectiveRate.toFixed(2)}%</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">Annual Net Income</p>
                    <p className="font-medium text-green-600">PKR {Math.round(taxResult.netIncome).toLocaleString()}</p>
                  </div>
                </div>
              </div>
            )}
          </TabsContent>
          <TabsContent value="taxSlabs" className="pt-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[#3a5a81] mb-2">Salaried Individuals Tax Slabs 2024-25</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2 text-left">Income Range (PKR)</th>
                        <th className="border p-2 text-left">Tax Rate</th>
                        <th className="border p-2 text-left">Fixed Tax</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border p-2">0 - 600,000</td>
                        <td className="border p-2">0%</td>
                        <td className="border p-2">PKR 0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2">600,001 - 1,200,000</td>
                        <td className="border p-2">5%</td>
                        <td className="border p-2">PKR 0</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border p-2">1,200,001 - 2,200,000</td>
                        <td className="border p-2">15%</td>
                        <td className="border p-2">PKR 30,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2">2,200,001 - 3,200,000</td>
                        <td className="border p-2">25%</td>
                        <td className="border p-2">PKR 180,000</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border p-2">3,200,001 - 4,100,000</td>
                        <td className="border p-2">30%</td>
                        <td className="border p-2">PKR 430,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2">4,100,001 - Above</td>
                        <td className="border p-2">35%</td>
                        <td className="border p-2">PKR 700,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#3a5a81] mb-2">Business Individuals Tax Slabs 2024-25</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-2 text-left">Income Range (PKR)</th>
                        <th className="border p-2 text-left">Tax Rate</th>
                        <th className="border p-2 text-left">Fixed Tax</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white">
                        <td className="border p-2">0 - 600,000</td>
                        <td className="border p-2">0%</td>
                        <td className="border p-2">PKR 0</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2">600,001 - 1,200,000</td>
                        <td className="border p-2">15%</td>
                        <td className="border p-2">PKR 0</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border p-2">1,200,001 - 1,600,000</td>
                        <td className="border p-2">20%</td>
                        <td className="border p-2">PKR 90,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2">1,600,001 - 3,200,000</td>
                        <td className="border p-2">30%</td>
                        <td className="border p-2">PKR 170,000</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="border p-2">3,200,001 - 5,600,000</td>
                        <td className="border p-2">40%</td>
                        <td className="border p-2">PKR 650,000</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border p-2">5,600,001 - Above</td>
                        <td className="border p-2">45%</td>
                        <td className="border p-2">PKR 1,610,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="bg-gray-50 border-t flex justify-between items-center text-sm text-gray-500 rounded-b-lg">
        <p>Based on FBR Pakistan Tax Slabs for 2024-25</p>
        <p>Disclaimer: For informational purposes only</p>
      </CardFooter>
    </Card>
  )
}
