import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export  const useStore = create(
  persist(
    (set, get) => ({
      rocks: 0,
      employee: { name: 'Jeremy', age: 35 },
      status: null,
      addRocks: () => set({ rocks: get().rocks + 1 }),
      login: async (password, email) => {
        set({ status: "pending" })
        const response = await fetch(`http://localhost:3000/login?password=${password}&email=${email}`,{ method: 'GET' });
        set({ rocks: await response.json() })
        set({ status: 'fulfilled' })
      },
    }),
    {
      name: 'the-rock-query', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)

export default useStore
