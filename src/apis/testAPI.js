import httpinstance from "@/utils/http";


export function get() {
  return httpinstance({
    url: 'home/category/head'
  })
}