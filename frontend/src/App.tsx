import React, { useState, useEffect } from "react";
import axios from "axios";

const App: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [data, setData] = useState<any[]>([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/data?page=${page}&search=${search}`);
            setData(response.data.data);
        } catch (err) {
            console.error("Error fetching data", err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page, search]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            alert("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            await axios.post("http://localhost:5000/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("File uploaded successfully!");
            fetchData();
        } catch (err) {
            alert("Error uploading file");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>CSV Upload & Data View</h2>

            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

            <br /><br />

            <input
                type="text"
                placeholder="Search data..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <table border={1} style={{ width: "100%", marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <br />
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                Previous
            </button>
            <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
    );
};

// ✅ Ensure Default Export
export default App;
