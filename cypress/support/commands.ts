// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        authenticateUsingToken(win: Window): void
    }
}

Cypress.Commands.add('authenticateUsingToken', (win: Window) => {
    win.localStorage.clear();
    //read environment variables through cypress. i.e. CYPRESS_refreshToken=yourtoken
    const token1 = "eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.OKIebJiWhXrgg1Iq29XEXui2_1X_YsKQ71QbnRvLWE2_YcJouykAqViDBXsInykJ-6t9F-aq6dK4EsRgtXQYUtiDg5O4G3MLpgjvwthZ4STZCDWJRqi-MZy1IUOcQFF25QcWaeBQzINiIvbuLB2QHH9j2719-q_O-wPVQ7_rKX3U6rEKMKFM6_YsNL_quFj8LTqnskMoUPtrvu9pn4M1G4Qt2cwC6pnscABD9RQ4Hv4JDNWfpMhtR7idBFnNj4UYdRd_j1r5NnHRHAhq98VieL8OvBpG3AqSNo2S-NL-kIFLQSzT_pAbEixssDgqYpnYofPNn3EX-lXgr8yW1YIgXg.43ZKXSVCe53-5gT7.gVnYgOpVrptg0m1X7jxnpNBza-bk8lM5-CdwgwsHWVulJw9tPEQiCerdCgnRUEi0moo2a_9M2jNfs1YlUx1smvX77kgZ2F2czUJWIqkvhay3xBkPVVn73nef58xy8nR76jkSMhR82S_3sffOVvvkmpElATjv-DvyBaHHmyc_E-tOxLxzzddhQYxWNKPvecUj6tf2hLbizFT2KK8Tnl0V3I9SnFV4Ox46x0UmXhmgoTfDMeOkzCfiSxsshhh0ex1P8iZKW9_UkHltj1_QcVdtla3yfxwkWVSOD_PvX8_pSNsOK7V2qd6Vul6oQieQzZjchUJtLTfHcxiXEXiV2YV68aXZTHO1jq0BBZhdCVtQadFAVZsglUd3gG03TzbrZIJYdTh-1RsK5YeDA3fLW3C-HLgqlRXOFTCiyyOZ_QhfoYdkxwsgodprfuWwltVK1KS2ruHf59GBRGnkUyBDtcP3FDalgsPnfrR0AY_l6ppxCWN4s0w4vD8zG8qLokDUN2rTb950Ov3GfFHsS8wjKHRbc4i9YAxIqtbyJT9OIvbIZCxuhDw6YuPtxy2V23d8tD10TDFAfsItop1rEHRRIbJDG8WLq8405BtYxxA38gMIJhkWEalAdVbfQZveJfXNWPJvXQTdLEB8FW0A8rJjmHnpOOorJL0vUTWqVRrvFc_-cl2Ay9cCl_Gr09KrZukR2OCpBPI2_GLOsKPd196Wlv6lGUA8iYZl1CHFIxSvPWvDVTIUiRI60emUs-Jy2rAJxiuayEEs_zrKwcEifpyFxq_qS5GRBELmAX7HOvOUCQvLduvq9ycijCG5-Vlh_P6erMmbYcBvN3ArIaEMNqkdFli-yZLhSdz-gFbnIhbnZYtT6kaVQ8_sDzSnFpIAGmKA6rz5SjUryC1zKqpmna2n_DD9wn494cFlyMaBaCKoriDAY-QbhXniduBeWBUhqSwmpBX2qsfq621vnqElIeR_FyB0gSMEbNSb81Lrc7f1AECsupILHxXHdSrBfBPg_7pTsIF4BsAR3xYMF2pI12VD7A7sOumxJB8Ln5na7gltGXeHTwehViKzgforEf146mYfFsUdXiHJTUz8GvztH2DbXWsFUPTGh0nU_lYKcgBIdHr-7_uuhzSSRtx1VpQM0zv4nnYv118Pwdd6v6S3H4I4As7orO8E4NGD3OziiNgumHOThMEZCo7z4eGobm4Gt5TfsNrOgMeIaA.WghiiE7lcPYqunLUS-Tu3A"
    const token2 = "eyJraWQiOiI4TWFLODUwZlp2YlZncmRHUXVHbEQxU1p5V2owbEpYYWtyTWhLSlRuc29VPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5OGNjZTY2My0yNjJiLTQxYjktODBiZi0wYzM5NjA1NDE5NTQiLCJjb2duaXRvOmdyb3VwcyI6WyJ1cy13ZXN0LTJfQUpiU0dUV3Q2X0F6dXJlIl0sInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUiLCJhdXRoX3RpbWUiOjE2Mzg4OTk3MzksImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy13ZXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtd2VzdC0yX0FKYlNHVFd0NiIsImV4cCI6MTYzODkwMzMzOSwiaWF0IjoxNjM4ODk5NzM5LCJ2ZXJzaW9uIjoyLCJqdGkiOiJkMmVlNjJhMy05YWM0LTRiMWMtYTlkNC05ZGYyNjlkMGU4MDUiLCJjbGllbnRfaWQiOiIzam4yaGZlcWJ0b2Q4a2g2Z2tpMXRmN2UzaSIsInVzZXJuYW1lIjoiYXp1cmVfa3ZsYXNpdWtAem9veC5jb20ifQ.tAbSXog8bGyX85Rvx0DWp8rpCjofgn6TlTWQZnKCT73iS-ECeAvK3GmsCpTzMclyEJ3x72c40BXi1u68nXb8ouvpa6Sp4o3X9FPf12okNBy2xPE9GmE077KeUkkV4wpe2la4OzZnhTGNs0KkrbZRNidVvx4Pa1uHVBb2l775R1PEyZxtShnzaSAj2RA3Dlh9dBE8T_o3_CdBudFa74yO_MyunWUHhMbGUTmI83e0ltb3Z_Z4E_Rx8BgXOv4ecYKbAx1vx4-iOR_PaYorDd5WNLhumSZ-bqcyI12GE-I7FPiYE07KJ8akvyzo9V2FhaiyUOgMRJgUPMFXaG4jhlXdLA"
    const token3 = "eyJraWQiOiJyN3VpVFA1a2xONWRuOWJqQzc2Z1RkeGR6dE1YY1RmWmI0TzNtUWVxbk04PSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiU1dBTFJKb2FqWWdKR09wVmo4azQxUSIsInN1YiI6Ijk4Y2NlNjYzLTI2MmItNDFiOS04MGJmLTBjMzk2MDU0MTk1NCIsImNvZ25pdG86Z3JvdXBzIjpbInVzLXdlc3QtMl9BSmJTR1RXdDZfQXp1cmUiXSwiY3VzdG9tOmN1c3RvbTptZW1iZXJPZiI6IltFbXBsb3llZXMsIENvbnRyYWN0b3JzXSIsImNvZ25pdG86cHJlZmVycmVkX3JvbGUiOiJhcm46YXdzOmlhbTo6MDY5Mjg5OTM1NDI2OnJvbGVcL0FyZ3VzRGVmYXVsdENvZ25pdG8iLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl9BSmJTR1RXdDYiLCJjb2duaXRvOnVzZXJuYW1lIjoiYXp1cmVfa3ZsYXNpdWtAem9veC5jb20iLCJub25jZSI6IlY5eFlGenl2S3hjRmNDTWtlQVlPVnZlM2N1N09oMGpFOTNRXzI3UGptZzNYd1lFM1NVMmRIUURTOVlabl9kTGctNWw5M21UU0xrRVZod3g1M3RneTZlSkh3UDlya3QzWGFRVFhDYnZNeURWWWhFZEhLdnJiLVJzbFBIT3JWRk8zS0xBc3JfZ2F0em9CeDNXMHBHcVR4YmU5Sm5DSVJhYVhJRWowcjlPT2lTZyIsImNvZ25pdG86cm9sZXMiOlsiYXJuOmF3czppYW06OjA2OTI4OTkzNTQyNjpyb2xlXC9Bcmd1c0RlZmF1bHRDb2duaXRvIl0sImF1ZCI6IjNqbjJoZmVxYnRvZDhraDZna2kxdGY3ZTNpIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoia3ZsYXNpdWtAem9veC5jb20iLCJwcm92aWRlck5hbWUiOiJBenVyZSIsInByb3ZpZGVyVHlwZSI6IlNBTUwiLCJpc3N1ZXIiOiJodHRwczpcL1wvc3RzLndpbmRvd3MubmV0XC8zODEzZjEwMC04YmM0LTQwZDgtYTA3Yy02YmY2ZTBjN2Q1M2FcLyIsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjMxOTAyNzgyODA4In1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYzODg5OTczOSwiZXhwIjoxNjM4OTAzMzM5LCJpYXQiOjE2Mzg4OTk3Mzl9.Hh96hsvIHOz1n0XztQG0oTCI_xoKaV7rl7wXXy-FRHc7fmkumuoyvn8CE5mXOhvAYXs6TDrlWDAwx0nqz-Uv4Y8Ucyc_QrUFvUApZLH-GdTtgqPZsnJkfntle0Vr4e9lTBL2HSKZ7gmQ6-sKYCqxhFZHXYcyB-zRc0gHwgyxZ1ZLaNdgw2BSYZhys0y3b9ZfcqD__5qrnAjsu6BEKA9-FMcP2_AR2IsayTvpak6RbCnQBQEfYQLcEH-uyyiT52OtFDsMHmfY2vISJKxM_kwAok-RouDEWdlgT-she6jBq2JPy1IA_x4ogC2Kud2RwblWDPtPQWbOiDHCbixuGRIc9A"
    win.localStorage.setItem("CognitoIdentityServiceProvider.3jn2hfeqbtod8kh6gki1tf7e3i.azure_kvlasiuk@zoox.com.refreshToken", token1);
    win.localStorage.setItem("CognitoIdentityServiceProvider.3jn2hfeqbtod8kh6gki1tf7e3i.azure_kvlasiuk@zoox.com.accessToken", token2);
    win.localStorage.setItem("CognitoIdentityServiceProvider.3jn2hfeqbtod8kh6gki1tf7e3i.azure_kvlasiuk@zoox.com.idToken", token3);
    win.localStorage.setItem("CognitoIdentityServiceProvider.3jn2hfeqbtod8kh6gki1tf7e3i.LastAuthUser", "azure_kvlasiuk@zoox.com");
    console.log('authenticateUsingToken was called...')
})