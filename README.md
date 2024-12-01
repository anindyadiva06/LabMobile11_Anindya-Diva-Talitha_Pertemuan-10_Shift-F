**ANINDYA DIVA TALITHA | H1D022026 | TUGAS PERTEMUAN 10**

**Proses READ**

Data diambil dari Firestore saat halaman dimuat menggunakan fungsi loadTodos(). Fungsi firestoreService.getTodos() memuat semua data dari Firestore dan menyimpannya di dalam variabel reaktif todos. Data kemudian dibedakan menjadi dua kategori yaaitu Active Todos dan Completed Todos berdasarkan statusnya yaitu activeTodos dan completedTodos yang ditampilkan menggunakan komponen IonList.

![image](https://github.com/user-attachments/assets/5887944f-6da4-45c8-9c18-dc66b17d8a8d) ![image](https://github.com/user-attachments/assets/e06d4662-1ea7-4a1a-a2d2-a813bd73a00b)

**Proses CREATE**

Pada halaman penambahan data, terdapat sebuah formulir yang berisi 'Title' dan 'Description' serta tombol ' Add Todo'. Saat tombol "+" diklik maka sebuah modal akan terbuka yaitu InputModal. Setelah pengguna mengisi judul dan deskripsi maka data akan dikirim melalui fungsi handleSubmit.
Jika editingId kosong maka akan dianggap sebagai penambahan data baru. Fungsi firestoreService.addTodo(todo) digunakan untuk menyimpan data ke Firestore. Setelah berhasil, data baru ditampilkan dengan memanggil loadTodos(). Ketika terjadi penambahan data maka akan muncul warning yang menandakan bahwa 
data berhasil ditambahkan

![image](https://github.com/user-attachments/assets/58181ff7-3ecb-4640-aa20-5dd3815b49a9) ![image](https://github.com/user-attachments/assets/bf37732f-fb46-461d-be26-150cdc0b6cde) ![WhatsApp Image 2024-12-01 at 19 21 30_f75f7f4a](https://github.com/user-attachments/assets/fee134d6-3486-476a-b65e-7d8d6f683dc5)

**Proses UPDATE**

**- Mengedit Informasi Data -**

Saat tombol edit pada item tertentu ditekan maka fungsi handleEdit(todo) akan dipanggil. Data yang dipilih dimasukkan ke InputModal untuk diedit. Tampilan formulir untuk pembaruan data sama seperti formulir pada penambahan data. Jika perubahan disimpan maka fungsi handleSubmit akan memanggil firestoreService.updateTodo(editingId.value, todo) untuk memperbarui data di Firestore. Ketika terjadi pembaruan data maka akan muncul warning yang menandakan bahwa 
data berhasil diperbarui.

![image](https://github.com/user-attachments/assets/87b1a92b-9253-49c8-9d42-9acc101a743b) ![image](https://github.com/user-attachments/assets/ff519360-e1b4-466d-9e4d-a4390d6d3220) ![image](https://github.com/user-attachments/assets/f6fce11d-fc79-4f6e-81df-3921eda26e9f)

**Mengubah Status**

Pada aplikasi ini, todo dapat diubah statusnya dari "active" menjadi "completed" dan sebaliknya dengan menggeser atau menekan tombol checkmark/close. Fungsi handleStatus(todo) akan memanggil firestoreService.updateStatus(todo.id, !todo.status) untuk memperbarui status di Firestore.

![image](https://github.com/user-attachments/assets/c9c98d7f-225f-4767-aa2d-d6ff172bb405) ![image](https://github.com/user-attachments/assets/2e8888d9-002c-4312-b80f-f59fcf3e3ee0) ![image](https://github.com/user-attachments/assets/7995922d-46ae-4782-beb2-ecd3f2543b01)

![image](https://github.com/user-attachments/assets/a48c47e5-96fe-472e-9e35-1323fc348c04) ![image](https://github.com/user-attachments/assets/5a2095f4-08ae-4c3d-a522-7f66f295419f)

**Proses DELETE**

Data dapat dihapus dengan menggeser item ke kiri atau menekan tombol delete. Fungsi handleDelete(todo) akan memanggil firestoreService.deleteTodo(todo.id) yang menghapus data dari Firestore. Setelah berhasil, data yang tersisa akan dimuat ulang menggunakan loadTodos().

![image](https://github.com/user-attachments/assets/95a36c5c-8666-465d-8e6a-403a1899a8e3) ![image](https://github.com/user-attachments/assets/8d917327-3e22-4b1e-8eb1-7334c7eb5096)




