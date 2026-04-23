const conta = {
    email: 'matias@dio.bank',
    password: '123456',
    name: 'Matias Sousa',
    balance: 20000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
