"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export default function ClientVideoSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 16,
    },
  });

  const [showModal, setShowModal] = useState(false);
  const [videoId, setVideoId] = useState<string | null>(null);

  const handleOpenVideo = (id: string) => {
    setVideoId(id);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setVideoId(null);
  };

  // Simulando uma playlist com vídeo IDs do YouTube
  const videos = [
    { title: "Aula 1", id: "dQw4w9WgXcQ" },
    { title: "Aula 2", id: "fLexgOxsZu0" },
    { title: "Aula 3", id: "kXYiU_JCYtU" },
    { title: "Aula 4", id: "eVTXPUF4Oz4" },
    { title: "Aula 5", id: "hLQl3WQQoQ0" },
    { title: "Aula 6", id: "RgKAFK5djSk" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Vídeos</h2>
      <div ref={sliderRef} className="keen-slider">
        {videos.map((video, i) => (
          <div
            key={i}
            onClick={() => handleOpenVideo(video.id)}
            className="keen-slider__slide bg-neutral-800 rounded-lg h-[140px] flex items-center justify-center text-white hover:scale-105 transition-transform shadow-md cursor-pointer"
          >
            {video.title}
          </div>
        ))}
      </div>
      <div className="mt-10 space-y-4">
        {["Novo vídeo: Segurança em Redes", "Dica rápida: HTML semântico"].map(
          (txt, i) => (
            <div
              key={i}
              className="text-white bg-neutral-900 p-4 rounded-lg shadow-sm"
            >
              {txt}
            </div>
          )
        )}
      </div>

      {showModal && videoId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative w-full max-w-2xl aspect-video">
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={handleClose}
            >
              &times;
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              className="w-full h-full rounded-lg shadow-lg"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
