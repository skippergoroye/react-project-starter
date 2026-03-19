import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoanApplicationState {
  firstName: string;
  lastName: string;
  email: string;
  loanType: string;
  loanAmount: string;
  loanStatus: string;
}

const initialState: LoanApplicationState = {
  firstName: '',
  lastName: '',
  email: '',
  loanType: '',
  loanAmount: '',
  loanStatus: '',
};

const migrationLoansSlice = createSlice({
  name: 'migrationLoans',
  initialState,
  reducers: {
    setAppyForUser: (state, action: PayloadAction<LoanApplicationState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setAppyForUser } = migrationLoansSlice.actions;
export default migrationLoansSlice.reducer;
