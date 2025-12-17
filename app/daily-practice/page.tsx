'use client';

import { useMemo, useState } from 'react';
import { bodyStates, lengths, practiceCombos, purposes, type BodyState, type PracticeLength, type PracticePurpose } from '@/content/dailyPractice';
import { Card } from '../components/Card';

export default function DailyPracticePage() {
  const [length, setLength] = useState<PracticeLength>(5);
  const [purpose, setPurpose] = useState<PracticePurpose>('安定');
  const [state, setState] = useState<BodyState>('緊');

  const practiceKey = `${length}-${purpose}-${state}`;
  const practice = useMemo(() => practiceCombos[practiceKey], [practiceKey]);

  return (
    <div className="section-shell flex flex-col gap-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-100 shadow-subtle bg-white/85">
        <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-tech-50 via-white to-warmth-50" aria-hidden />
        <div className="relative p-8 sm:p-12 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 w-fit">
            Daily Practice / 每日練習
          </div>
          <h1 className="text-3xl font-semibold text-slate-900">依你的狀態，生成一張今日練習卡</h1>
          <p className="text-base text-slate-700 max-w-3xl leading-relaxed">
            選擇時長、目的與身體狀態，立即獲得一張可操作的練習卡。準備、呼吸、觀照、結束、注意事項都在裡面；像每日可重複的工具。
          </p>
          <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-700">
            <span className="tag-pill">低飽和柔和漸層</span>
            <span className="tag-pill">神聖幾何背景</span>
            <span className="tag-pill">可下載 UI</span>
          </div>
        </div>
        <div className="absolute right-8 bottom-8 h-24 w-24" aria-hidden>
          <svg className="pattern" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none">
            <circle cx="100" cy="100" r="80" stroke="rgba(74,127,224,0.35)" strokeWidth="10" />
            <path d="M40 140 C80 80,120 80,160 140" stroke="rgba(245,138,79,0.35)" strokeWidth="6" />
          </svg>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="card-surface p-6 flex flex-col gap-4">
          <h2 className="text-lg font-semibold text-slate-900">選擇你的節奏</h2>
          <div className="flex flex-col gap-3 text-sm text-slate-700">
            <label className="flex flex-col gap-2">
              <span className="font-semibold text-slate-800">時長</span>
              <div className="flex flex-wrap gap-2">
                {lengths.map((len) => (
                  <button
                    key={len}
                    onClick={() => setLength(len)}
                    className={`px-3 py-2 rounded-2xl border text-sm font-semibold transition ${
                      length === len ? 'bg-tech-600 text-white border-tech-600 shadow-subtle' : 'bg-white text-slate-700 border-slate-200 hover:border-tech-300'
                    }`}
                  >
                    {len} 分鐘
                  </button>
                ))}
              </div>
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-semibold text-slate-800">目的</span>
              <div className="flex flex-wrap gap-2">
                {purposes.map((item) => (
                  <button
                    key={item}
                    onClick={() => setPurpose(item)}
                    className={`px-3 py-2 rounded-2xl border text-sm font-semibold transition ${
                      purpose === item ? 'bg-warmth-600 text-white border-warmth-600 shadow-subtle' : 'bg-white text-slate-700 border-slate-200 hover:border-warmth-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-semibold text-slate-800">身體狀態</span>
              <div className="flex flex-wrap gap-2">
                {bodyStates.map((item) => (
                  <button
                    key={item}
                    onClick={() => setState(item)}
                    className={`px-3 py-2 rounded-2xl border text-sm font-semibold transition ${
                      state === item ? 'bg-tech-100 text-tech-800 border-tech-200 shadow-subtle' : 'bg-white text-slate-700 border-slate-200 hover:border-tech-200'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </label>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Card
            title={practice?.title ?? '選擇上方組合，生成今日練習卡'}
            description="準備、呼吸指引、觀照提示、結束語、注意事項都在這裡。保持身體安全、步驟清楚。"
            tone="warmth"
            action={<button className="secondary w-full sm:w-auto">下載練習卡（UI）</button>}
          >
            {practice ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 leading-relaxed">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-slate-900">準備</p>
                  <p>{practice.preparation}</p>
                  <p className="font-semibold text-slate-900">呼吸指引</p>
                  <p>{practice.breath}</p>
                  <p className="font-semibold text-slate-900">觀照提示</p>
                  <p>{practice.observation}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-slate-900">結束語</p>
                  <p>{practice.closing}</p>
                  <p className="font-semibold text-slate-900">注意事項</p>
                  <p>{practice.caution}</p>
                  <div className="mt-4 rounded-2xl bg-gradient-to-r from-tech-50 to-warmth-50 border border-slate-100 px-4 py-3">
                    <p className="text-xs text-slate-600">這張卡片為前端示意，請依身體狀態調整力度，必要時諮詢專業醫療。</p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-sm text-slate-700">請先選擇上方的時長、目的與身體狀態。</p>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
