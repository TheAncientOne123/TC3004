'use client'

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
    <div className="font-sans flex flex-col items-center min-h-screen p-8 gap-8 sm:p-20">
      <h1 className="text-2xl font-bold">NextJS Firebase</h1>

      <div className="flex gap-2">
        <input
          type="text"
          className="border-2 px-2 py-1"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={handleAdd}>
          Agregar
        </button>
      </div>

      <table className="border-collapse border border-gray-300 w-full max-w-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Empleados</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item:any) => (
            <tr key={item.id} className="hover:bg-purple-50">
              <td className="border border-gray-300 px-4 py-2">{item.inputText}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className="bg-green-500 text-white px-2 py-1 mr-2"
                  onClick={() => handleEdit(item.id)}
                >
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => handleDelete(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
