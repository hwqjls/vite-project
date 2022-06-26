import http from "@/http/http";

export async function login(data: { userName: string, password: string }) {
    return http.post(`/login`, data)
}