module.exports = {
  getTodos: async () => {
    const res = await fetch("http://localhost:3000/api/something");
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      console.error(res);
    }
  },
  saveTodo: async (todo) => {
    const res = await fetch("http://localhost:3000/api/something", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });

    if (res.ok) {
      return res;
    } else {
      console.error(res);
    }
  },
  deleteTodo: async (id) => {
    const res = await fetch("http://localhost:3000/api/something", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    if (res.ok) {
      return res;
    } else {
      console.error(res);
    }
  },
  updateTodo: async (updatedTodo) => {
    const res = await fetch("http://localhost:3000/api/something", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });

    if (res.ok) {
      return res;
    } else {
      console.error(res);
    }
  },
};
