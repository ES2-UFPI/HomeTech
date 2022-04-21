import jsonwebtoken from 'jsonwebtoken'

const secret = "031EA78CFB8CF82C686C17E17836F2D6FB9371423786130ADB843382733773DA"
export const jwt = (id: String) => {
    const token = jsonwebtoken.sign({ id }, secret, {
        expiresIn: 800
    })

    return token
}
