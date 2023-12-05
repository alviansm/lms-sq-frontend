'use client';

import DefaultNavbar from '../../components/DefaultNavbar';
import DefaultFooter from '../../components/DefaultFooter';
// Forms component
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Select,
  FileInput,
  Textarea,
} from 'flowbite-react';
import React from 'react';
const GUIDE_TITLE =
  'Judul kuis harus singkat, menarik, dan jelas menggambarkan apa yang diperoleh setelah mengerjakan: Kuis menarik dengan hasil yang jelas setelah mengerjakan!';

const CreateQuiz = () => {
  const [title, setTitle] = React.useState('');
  const [slug, setSlug] = React.useState('');
  const [organizer, setOrganizer] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [imageThumbnail, setImageThumbnail] = React.useState('');
  const [time, setTime] = React.useState('');
  const [cooldown, setCooldown] = React.useState('');
  const [questionSum, setQuestionSum] = React.useState('');
  const [difficulty, setDifficulty] = React.useState('');
  const [desc, setDesct] = React.useState('');

  const [isTitleActive, setIsTitleActive] = React.useState(GUIDE_TITLE);
  const [isSlugActive, setIsSlugActive] = React.useState('');
  const [isOrganizerActive, setIsOrganizerAcitve] = React.useState('');
  const [isCategoryActive, setIsCategoryActive] = React.useState('');
  const [isImageThumbnailActive, setImageThumbnailActive] = React.useState('');
  const [isTimeActive, setIsTimeActive] = React.useState('');
  const [isCooldownActive, setIsCooldownActive] = React.useState('');
  const [isQuestionSum, setIsQuestionSumActive] = React.useState('');
  const [isDifficultyAcitve, setIsDifficultyActive] = React.useState('');
  const [isDescActive, setIsDescActive] = React.useState('');

  return (
    <div>
      {/* Navbar */}
      <DefaultNavbar activePage={'createQuiz'} />

      {/* Content*/}
      <div className="mx-auto bg-slate-200 flex items-start justify-center align-middle px-4 pb-12">
        <div className="p-8 bg-white min-w-full flex flex-col rounded-md drop-shadow-lg mt-20">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <form className="flex maw-w-md w-full flex-col gap-4">
                {/* Title */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="title" value="Judul Kuis" />
                  </div>
                  <TextInput
                    id="title"
                    type="text"
                    placeholder="Judul Kuis Anda"
                    required
                  />
                </div>
                {/* Slug */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="slug" value="Slug Kuis" />
                  </div>
                  <TextInput
                    id="slug"
                    type="text"
                    placeholder="slug-kuis-anda"
                    helperText="Pastikan slug untuk kuis Anda, belum pernah digunakan"
                    required
                  />
                </div>
                {/* Organizer */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="organizer" value="Pengorganisir" />
                  </div>
                  <TextInput
                    id="organizer"
                    type="text"
                    placeholder="e.g. Akademi Militer"
                    required
                  />
                </div>
                {/* Category */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="category" value="Kategori Kuis" />
                  </div>
                  <Select id="category">
                    <option>Ujian Akademik</option>
                    <option>Spesialisasi Ketrampilan</option>
                  </Select>
                </div>
                {/* Thumbnail */}
                <div id="fileUpload">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="quizThumbnail"
                      value="Upload Thumbnail Kuis"
                    />
                  </div>
                  <FileInput
                    id="quizThumbnail"
                    helperText="Thumbnail berguna untuk menggambarkan konten Anda dan menarik Pengguna"
                  />
                </div>
                {/* Time */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="time" value="Waktu" />
                  </div>
                  <TextInput
                    id="time"
                    type="text"
                    placeholder="e.g. 30"
                    required
                  />
                </div>
                {/* Cooldown */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="organizer" value="Pengorganisir" />
                  </div>
                  <TextInput
                    id="organizer"
                    type="text"
                    placeholder="e.g. Akademi Militer"
                    required
                  />
                </div>
                {/* Question Sum */}
                {/* Difficulty */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="difficulty" value="Tingkat Kesulitan" />
                  </div>
                  <Select id="difficulty">
                    <option>Antusias</option>
                    <option>Hobi</option>
                    <option>Pemula</option>
                    <option>Menengah</option>
                    <option>Lanjut</option>
                    <option>Profesional</option>
                    <option>Expert</option>
                  </Select>
                </div>
                {/* Description */}
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="desc" value="Deskripsi" />
                  </div>
                  <Textarea
                    id="desc"
                    placeholder="Deskripsikan kuis Anda..."
                    required
                    rows={4}
                  />
                </div>
                <Button>Lanjut</Button>
              </form>
            </div>
            <div className="col-span-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur error harum nihil modi explicabo quibusdam cumque
              labore distinctio? Eligendi beatae magnam, magni nobis, excepturi
              non quam voluptates sint quisquam saepe vitae ipsa laudantium odio
              a? Dicta est, ipsa consectetur inventore sit ipsum dolor ducimus
              accusamus laboriosam distinctio cum obcaecati aliquid.
            </div>
          </div>
        </div>
      </div>
      {/* End of content */}

      <DefaultFooter />
    </div>
  );
};

export default CreateQuiz;
