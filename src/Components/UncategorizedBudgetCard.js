import React from 'react'
import BudgetCard from './BudgetCard'
import {UNCATEGORIZD_BUDGET_ID, useBudgets} from '../contexts/BudgetContext'

export default function UncategorizedBudgetCard(props) {
  const {getBudgetExpenses} = useBudgets();
  const amount = getBudgetExpenses(UNCATEGORIZD_BUDGET_ID).reduce((total,expense) => total+expense.amount, 0);
  
  if (amount === 0) return null
  return (
    <BudgetCard name="Uncategorized" amount={amount} gray {...props}/>
  )
}
