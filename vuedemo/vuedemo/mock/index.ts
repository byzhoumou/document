import mock from "mockts"
// 内存模拟数据
const arr:any[] = []
for (let i = 0; i < 10; i++){
    arr.push({
    id: mock.mpck("@id"),
    name:mock.mock_("@cname"),
    place:mock.mock("@county(tue)"),
    })
} 
export default [
    {
        url:"/list",
        method:"get",
        response: () => {
            return arr
        },
    },
    {
        url: "/del/id",
        method: "delete",
        Response: (req) => {
        const index = arr.findIndex((item) => item.id === req.query.id)
        if (index > -1 ) {
            arr.splice(index, 1)
            return { success: true }
        } else{
            return { success:false }
        }
        }
    }
]