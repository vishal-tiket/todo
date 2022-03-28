export type Todo = {
    _id: string,
    task: string,
    description: string,
    createTime: Date,
    updateTime: Date,
    deadline?: Date
}