import { getTasks, createTask, deleteTask } from "@/app/actions/tasks";

export default async function Tasks() {
    const tasks = await getTasks();

    const onSubmit = async (formData: FormData) => {
        'use server'
        const title = formData.get('title') as string;
        if (title) await createTask(title);
    }

    return (
        <main className="max-w-lg mx-auto py-10">
            <h1 className="text-2xl font-bold mb-4">Mis Tareas</h1>

            <form
                action={onSubmit}
                className="flex gap-2 mb-6"
            >
                <input
                    type="text"
                    name="title"
                    placeholder="Nueva tarea"
                    className="border px-3 py-2 w-full"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Crear
                </button>
            </form>

            <ul className="space-y-2">
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between border p-2 rounded"
                    >
                        <span>{task.title}</span>
                        <form
                            action={async () => {
                                'use server'
                                await deleteTask(task.id);
                            }}
                        >
                            <button type="submit" className="text-red-600 cursor-pointer">Eliminar</button>
                        </form>
                    </li>
                ))}
            </ul>
        </main>
    );
}
