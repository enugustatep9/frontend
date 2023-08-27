"use client"

import MainLayout from "@/app/layouts/includes/MainLayout"
import Blog1 from "./1"
import { otherArticles } from "../blogData"
import MoreDen from "../MoreContent"

export default function Blog({ params }) {
    console.log('the id is: ', params.id)
    otherArticles
    return(
        <MainLayout>
            <div>
                <Blog1 />
                {/* {params.id == 1 && (<Blog1 />)} */}
            </div>
            <MoreDen otherArticles={otherArticles} />
        </MainLayout>
    )
}