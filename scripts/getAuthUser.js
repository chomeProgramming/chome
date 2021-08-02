const getCookieJS = require("./getCookie.js")
const { fetchUrl } = require("../client")

async function getAuthUser() {
    return await (await fetch (fetchUrl+"/user/authUser", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ accessToken: getCookieJS().accessToken })
    }) ).json()
}

module.exports = getAuthUser