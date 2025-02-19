# 🏗 Lead Management System

This project is a SPA with a simple **Lead Management System**, built with **.NET 9**, **React**, and **SQL Server** running in **Docker**.

This guide will help you **set up and run the project** on your local machine.

---

## 🚀 Prerequisites

Ensure you have the following installed:

- [Docker &amp; Docker Compose](https://www.docker.com/get-started)
- [Node.js &amp; npm](https://nodejs.org/) (for the frontend)
- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download) (for the API)

---

## 🏗 Setting Up the Project

### Clone the Repository

```sh
git clone https://github.com/mit018/lead-management.git
cd lead-management
```

---

## 🗄 Setting Up the Database (SQL Server)

### Start SQL Server using Docker

Run the following command **from the root of the project** to start the database container:

```sh
docker-compose up -d
```

✅ This will:

- Start an **SQL Server 2022** container.
- Automatically create and restore the database from `backup.sql`.

## 🛠 Running the API (.NET 9)

### Navigate to the API folder

```sh
cd api
```

### Restore dependencies

```sh
dotnet restore
```

### Start the API

```sh
dotnet run
```

The API should now be running at:

- **http://localhost:5009**

If the API is running on a different port, make sure to update the **`VITE_API_URL`** variable in the **`.env`** file inside the frontend directory.

## 🌍 Running the Frontend (React)

#### Navigate to the frontend folder

```sh
cd frontend
```

#### Install dependencies

```sh
npm install
```

#### Start the development server

```sh
npm run dev
```

The app will be available at **http://localhost:5173**.

---

---

## 🔥 Testing Everything

Once everything is up and running:

- Visit **`http://localhost:5173`**.
- Ensure the API is running at **`http://localhost:5009`**.
- The database should be accessible via **Docker SQL Server**.

You are now ready to start using the **Lead Management System**! 🚀

### ✅ **How the Application Works**

* You can **view lead information** in the **Invited** tab.
* Each card has options to **Accept** or **Decline** .
* If you **Accept** a lead:
  * If the price is **above $500**, a **10% discount** is automatically applied.
  * The lead is moved to the **Accepted** tab.
* If you **Decline** a lead:
  * The lead is marked as declined and will no longer appear in the active list.

#### ➕ Adding Custom Leads

New leads are **automatically created with the "Invited" status** and the **current date as the creation date**.
If desired, you can **manually add leads directly to the API** by sending a **POST** request.

Simply access the following URL in your browser:

* **[http://localhost:5009/scalar/v1#tag/lead/POST/api/lead](http://localhost:5009/scalar/v1#tag/lead/POST/api/lead)**

Then, configure the **JSON payload** to send the request as needed. 🚀

---

## 📌 Stopping Docker

To stop and remove all containers, run:

```sh
docker-compose down -v
```

This will **stop the database and remove all volumes**.
