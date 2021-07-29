function getCookieJS() {
    let cookies = {}
    document.cookie.split("; ").forEach(cookie => {
        cookie = cookie.split("=")
        cookies[cookie[0]] = cookie[1]
    })
    return cookies
}

export default getCookieJS