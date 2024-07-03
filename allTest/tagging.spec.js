import {test,expect, _electron} from "@playwright/test"

test("TC 01 @sanity ", async({page})=>{
    console.log("This is a TC 01 ");
})

test("TC 02 @smoke",{tag:'@smoke'},async({page})=>{
    console.log("This is a TC 02 ");
})

test("TC 03 @reg", async({page})=>{
    console.log("This is a TC 03 ");
})

test("TC 04 @smoke", async({page})=>{
    console.log("This is a TC 04 ");
})

test("TC 05 @reg", async({page})=>{
    console.log("This is a TC 05 ");
})

test("TC 06 @reg@sanity", async({page})=>{
    console.log("This is a TC 06 ");
    console.log(__dirname, __filename);
})