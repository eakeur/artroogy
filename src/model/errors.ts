export interface Fail extends Error {
    parent: Error
    params: any[]
}

export namespace errors {
    export function wrap(operation: string, err: Error, ...params: any[]): Error {
        return {
            message: "",
            name: "",
            stack: operation,
            parent: err,
            params: params
        } as Error
    }

    export function is(err: Error, target: Error): boolean{
        const anyErr = err as any
        return (anyErr.parent && (anyErr.parent === target || is(anyErr.parent, target))) || err === target
    }
}