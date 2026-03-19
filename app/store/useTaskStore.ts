import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Status, Task, TaskForm } from '~/@types/taskType'

const uid = (): string => `t_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`

interface TaskStore {
  tasks: Task[]
  addTask: (form: TaskForm) => void
  updateTask: (id: string, form: TaskForm) => void
  deleteTask: (id: string) => void
  changeStatus: (id: string, status: Status) => void
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set) => ({
      tasks: [],

      addTask: (form) =>
        set((s) => ({
          tasks: [
            ...s.tasks,
            {
              ...form,
              id: uid(),
              createdAt: new Date().toISOString()
            }
          ]
        })),

      updateTask: (id, form) =>
        set((s) => ({
          tasks: s.tasks.map((t) => (t.id === id ? { ...t, ...form } : t))
        })),

      deleteTask: (id) =>
        set((s) => ({
          tasks: s.tasks.filter((t) => t.id !== id)
        })),

      changeStatus: (id, status) =>
        set((s) => ({
          tasks: s.tasks.map((t) => (t.id === id ? { ...t, status } : t))
        }))
    }),
    {
      name: 'taskify-storage'
    }
  )
)
