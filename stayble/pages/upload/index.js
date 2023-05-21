import { useState } from 'react';
import storage from "../../firebaseConfig.js";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import SideBar from '@/components/SideBar.js';
import styles from '../../styles/page.module.css'

export default function uploadPage() {
    const [file, setFile] = useState();
    const [percent, setPercent] = useState(0);

    function uploadHandler() {
        if (!file) {
            alert("Please choose at least 3 photos fo horses!");
        }

        const storageRef = ref(storage, `/files/${file.name}`);

        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                // update progress
                setPercent(percent);
            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );
    }

    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);
    }

    return (
        <main className={styles.main}>
            <SideBar />
            <input type="file" accept="image/*" onChange={handleChange} />
            <button onClick={uploadHandler} >Upload to Stable!</button>
        </main>
    );
}