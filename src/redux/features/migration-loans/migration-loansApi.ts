/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// import ToastNotification from "@/components/shared/ToastNotification";
import { apiSlice } from "../api/apiSlice";

export const migrationLoanApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLoanStats: builder.query<any, string>({
      query: () => ({
        url: "/migrationloans/stats",
        method: "GET",
      }),
    }),

    // International student Loans
    getInternationalStudentloanCardStats: builder.query<any, void>({
      query: () => ({
        url: "/migrationloans/international-students/stats",
        method: "GET",
      }),
      // async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      //   try {
      //     const { data } = await queryFulfilled;

      //     dispatch("hello")
      //     ToastNotification({
      //       title: data.responseMessage,
      //       description: "Card Created Successfully",
      //       type: "success",
      //     });
      //   } catch (error: any) {
      //     ToastNotification({
      //       title: error?.error?.data?.error || error?.error?.error,
      //       description: error?.error?.data?.message || error?.error?.status,
      //       type: "error",
      //     });
      //   }
      // },
    }),

    getInternationalStudentGraphData: builder.query<any, string>({
      query: (period) => ({
        url: `/migrationloans/international-students/graph/data?period=${period}`,
        method: "GET",
      }),
    }),

    getInternationalStudentLoans: builder.query<
      any,
      { page: number; perPage: number; status?: string; period?: string }
    >({
      query: ({ page, perPage, status, period }) => ({
        url: "/migrationloans/international-students/list",
        params: { page, perPage, status, period },
      }),
    }),

    // Proof OF Funds
    getProofOfFundsStats: builder.query<any, void>({
      query: () => ({
        url: "/migrationloans/proof-of-funds/stats",
        method: "GET",
      }),
    }),

    getProofOfFundsGraph: builder.query<any, string>({
      query: (period) => ({
        url: `/migrationloans/proof-of-funds/graph/data?period=${period}`,
        method: "GET",
      }),
    }),

    getProofOfFundsApplication: builder.query<
      any,
      {
        period?: string;
        page: number;
        perPage: number;
        status?: string;
        type?: string;
      }
    >({
      query: ({ period, page, perPage, status, type }) => ({
        url: "/migrationloans/proof-of-funds/list",
        params: { page, perPage, status, period, type },
        method: "GET",
      }),
    }),

    // Migration Support Loan
    getMigrationSUpportLoanStats: builder.query<any, void>({
      query: () => ({
        url: "/migrationloans/migration-support/stats",
        method: "GET",
      }),
    }),

    getMigrationLoansGraph: builder.query<any, string>({
      query: (period) => ({
        url: `/migrationloans/migration-support/graph/data?period=${period}`,
        method: "GET",
      }),
    }),

    getMigrationSupportLoanApplication: builder.query<
      any,
      { period?: string; page: number; perPage: number; status?: string }
    >({
      query: ({ period, page, perPage, status }) => ({
        url: "/migrationloans/migration-support/list",
        params: { page, perPage, status, period },
        method: "GET",
      }),
    }),

    getLoanDetails: builder.query<
      any,
      { id: string; period?: string; status?: string }
    >({
      query: ({ id, period, status }) => ({
        url: `/migrationloans/${id}/single`,
        params: { id, status, period },
        method: "GET",
      }),
    }),

    newLoanApplication: builder.mutation({
      query: (body) => ({
        url: "/migrationloans/new",
        method: "POST",
        body,
      }),
    }),

    uploadLoanDocument: builder.mutation({
      query: (body) => ({
        url: "/migrationloans/files/upload",
        method: "PATCH",
        body,
      }),
    }),

    getLoanTypes: builder.query<any, void>({
      query: () => ({
        url: "/migrationloans/types/list",
        method: "GET",
      }),
    }),

    uploadFile: builder.mutation({
      query: (formData: FormData) => ({
        url: "/files/upload",
        method: "POST",
        body: formData,
      }),
    }),

    incompletePaymentGraph: builder.query<any, string>({
      query: (period) => ({
        url: `/migrationloans/incomplete-payment/graph?period=${period}`,
        method: "GET",
      }),
    }),

    incompletePaymentTable: builder.query<
      any,
      { period?: string; page: number; perPage: number; status?: string }
    >({
      query: ({ period, page, perPage, status }) => ({
        url: "/migrationloans/incomplete-payment/list",
        params: { page, perPage, status, period },
        method: "GET",
      }),
    }),

    //  pofInterestpayment
    getPofInterestStats: builder.query<any, string>({
      query: (period) => ({
        url: `/transactions/pof/interest/stats?period=${period}`,
        method: "GET",
      }),
    }),

    pofInterestPaymentGraph: builder.query<
      any,
      { period: string; type?: string }
    >({
      query: ({ period, type = "PROOF_OF_FUNDS_INTEREST" }) => ({
        url: `/transactions/revenue/graph?period=${period}&type=${type}`,
        method: "GET",
      }),
    }),

    createLoanProvider: builder.mutation({
      query: (body) => ({
        url: "/migrationloans/providers",
        method: "POST",
        body,
      }),
    }),

    assignLoanProvider: builder.mutation<
      any,
      { id: string; providerId: number }
    >({
      query: ({ id, providerId }) => ({
        url: `/migrationloans/${id}/assign-provider/${providerId}`,
        method: "GET",
      }),
    }),

    getLoanProvider: builder.query<any, void>({
      query: () => ({
        url: "/migrationloans/providers",
        method: "GET",
      }),
    }),





    
  }),

});

export const {
  useGetInternationalStudentloanCardStatsQuery,
  useGetInternationalStudentGraphDataQuery,
  useGetInternationalStudentLoansQuery,
  useGetProofOfFundsStatsQuery,
  useGetMigrationSUpportLoanStatsQuery,
  useGetProofOfFundsGraphQuery,
  useGetMigrationLoansGraphQuery,
  useGetProofOfFundsApplicationQuery,
  useGetMigrationSupportLoanApplicationQuery,
  useGetLoanDetailsQuery,
  useNewLoanApplicationMutation,
  useUploadLoanDocumentMutation,
  useGetLoanTypesQuery,
  useUploadFileMutation,
  useIncompletePaymentGraphQuery,
  useIncompletePaymentTableQuery,
  useGetLoanStatsQuery,
  useGetPofInterestStatsQuery,
  usePofInterestPaymentGraphQuery,
  useCreateLoanProviderMutation,
  useGetLoanProviderQuery,
  useAssignLoanProviderMutation,

} = migrationLoanApi;
