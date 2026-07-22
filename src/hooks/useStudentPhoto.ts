import { useState, useEffect } from 'react';
import { studentData } from '../data/mockData';

export function useStudentPhoto() {
  const [photo, setPhoto] = useState<string>(() => {
    return localStorage.getItem('cuims_student_photo') || studentData.photoUrl;
  });

  useEffect(() => {
    const handleStorage = () => {
      const saved = localStorage.getItem('cuims_student_photo');
      if (saved) {
        setPhoto(saved);
      } else {
        setPhoto(studentData.photoUrl);
      }
    };

    window.addEventListener('storage', handleStorage);
    window.addEventListener('cuims_photo_updated', handleStorage);
    return () => {
      window.removeEventListener('storage', handleStorage);
      window.removeEventListener('cuims_photo_updated', handleStorage);
    };
  }, []);

  const updatePhoto = (newPhoto: string) => {
    setPhoto(newPhoto);
    try {
      localStorage.setItem('cuims_student_photo', newPhoto);
      window.dispatchEvent(new Event('cuims_photo_updated'));
    } catch (e) {
      console.error('Failed to save photo to localStorage', e);
    }
  };

  const resetPhoto = () => {
    setPhoto(studentData.photoUrl);
    localStorage.removeItem('cuims_student_photo');
    window.dispatchEvent(new Event('cuims_photo_updated'));
  };

  return { photo, updatePhoto, resetPhoto };
}
