import React from 'react';

const Education = () => {
  return (
    <section id="education" className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="text-3xl font-bold mb-8">Education</h3>
      <div className="blog-post p-6">
        <h4 className="text-xl font-bold mb-2">Universitas Indonesia - Depok, Indonesia</h4>
        <p className="text-sm text-amber-700 italic mb-3">Aug 2017 - Aug 2021</p>
        <p className="font-bold mb-2">Islamic Economics</p>
        <ul className="list-disc list-inside space-y-1">
          <li>2nd winner of Universitas Indonesia Quranic Olympiad 2020 (hifzhil quran 1 juz)</li>
          <li>Represented Faculty in IESCO 2020</li>
          <li>Represented Faculty in OIM UI 2020</li>
          <li>Participated in The 2021 SMICIE: SEBELAS MARET INTERNATIONAL CONFERENCE ON ISLAMIC ECONOMICS</li>
          <li>Participated in various organizational and volunteering activities</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
