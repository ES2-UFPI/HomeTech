import app from "./app/app";
app.listen(process.env.PORT, () => {
    console.log(`Server running in Port: ${process.env.PORT}`)
})