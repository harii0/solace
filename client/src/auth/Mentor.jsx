

import { useState } from 'react';

const Mentor = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform verification logic with the uploaded file
        if (file) {
            // Perform verification logic with the uploaded file
            console.log('Verifying file:', file);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Mental Health Professional Verification</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
                <div className="mb-4">
                    <label htmlFor="file" className="text-lg">Upload File:</label>
                    <input
                        type="file"
                        id="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="border p-2 bg-gray-100 rounded"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Verify</button>
            </form>
        </div>
    );
};

export default Mentor;

