import { create } from "zustand";

interface AuthState {
    user: null | object,
    update: (user: object) => void
}

const useAuth = create<AuthState>((set) => (
    {
        user: null,
        update: (user: object) => set(() => ({ user }))
    }
))

export default useAuth;