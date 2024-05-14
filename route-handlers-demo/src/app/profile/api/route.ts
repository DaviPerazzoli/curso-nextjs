import type { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
    // const requestHeaders = request.headers;

    const headerList = headers() // Readonly

    cookies().set('resultsPerPage','20');

    const theme = request.cookies.get('theme');

    // console.log(requestHeaders.get('Authorization'));
    console.log(headerList.get('Authorization'));

    console.log(theme);
    console.log(cookies().get('resultsPerPage'));

    // cookies().

    return new Response('<h1>Profile api</h1>', {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}