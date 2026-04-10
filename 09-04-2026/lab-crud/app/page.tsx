'use client'

import Image from "next/image";
import { useEffect, useState } from 'react';
import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "firebase/firestore";
import { db } from '../firebase/firebase.config';

export default function Home() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAdd = async () => {
    await addDoc(collection(db, 'items'), { inputText });
    setInputText('');
    fetchItems();
  };

  const handleDelete = async (id: string) => {
    if (!id) return;
    await deleteDoc(doc(db, 'items', id));
    fetchItems();
  };

  const handleEdit = async (id: string) => {
    const editValue = prompt("Enter the new value");
    if (!editValue) return;
    await updateDoc(doc(db, 'items', id), { inputText: editValue });
    fetchItems();
  };

  const fetchItems = async () => {
    const snapshot = await getDocs(collection(db, 'items'));
    setItems(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        inputText: doc.data().inputText
      }))
    );
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>NextJS Firebase</h1>

      <input type="text" className="border-2" value={inputText} onChange={(e) => setInputText(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAdd}>Agregar</button>

      <ul>
        {items.map((item: any ) => (
          <li key={item.id}>
            {item.inputText}
            <button className="bg-red-500 text-white px-2 py-1 ml-4" onClick={() => handleDelete(item.id)}>Eliminar</button>
            <button className="bg-green-500 text-white px-2 py-1 ml-2" onClick={() => handleEdit(item.id)}>Editar</button>
          </li> 
        ))}
      </ul>
    </div>
  );
}