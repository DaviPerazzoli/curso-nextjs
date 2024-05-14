export const dynamic = "force-dynamic"; //* "auto" by default

export async function GET () {
    return Response.json({
        time: new Date().toLocaleTimeString()
    })
}