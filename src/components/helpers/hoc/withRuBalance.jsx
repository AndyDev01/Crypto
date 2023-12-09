export const WithRuBalance = Component => {
    return props => {
        const {balance} = props
        const ruBalance = balance * 90 // 90 - статический курс на данный момент
        return <Component {...props} ruBalance={ruBalance} />
    }
}