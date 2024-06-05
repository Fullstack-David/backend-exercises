import oExpress from "express"
import userRoutes from "./routes/users.mjs"

let app = oExpress()

const PORT = 3008


app.use(oExpress.json()) //so the _request.body get defined.  

app.use(userRoutes)


app.listen(PORT, () =>
{
    console.log(`Server is running on port ${PORT}. localhost:${PORT}`)
})