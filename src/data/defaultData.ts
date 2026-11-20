import {
  LampiranColumnWidths,
  PersonnelRow,
  SatkerPreset,
  SprinDocument,
  SprinTemplateItem,
  StampSignatureConfig,
} from '../types/sprin';

export function getSprinContinuationHeaderTitle(
  doc: Pick<SprinDocument, 'lampiranHeaderTitle' | 'sprinHeaderTitle'>
): string {
  const custom = (doc.sprinHeaderTitle || '').trim();
  if (custom) return custom.toUpperCase();
  const base = (doc.lampiranHeaderTitle || 'LAMP SPRIN KAPOLSEK SMG SELATAN').trim();
  const stripped = base.replace(/^(?:LAMPIRAN|LAMP\.?)\s+/i, '').trim();
  return (stripped || 'SPRIN KAPOLSEK SMG SELATAN').toUpperCase();
}

export function getLampiranHeaderTitle(
  doc: Pick<SprinDocument, 'lampiranHeaderTitle'>
): string {
  const raw = (doc.lampiranHeaderTitle || 'LAMP SPRIN KAPOLSEK SMG SELATAN').trim().toUpperCase();
  if (!raw) return 'LAMP SPRIN KAPOLSEK SMG SELATAN';
  if (/^LAMP\b/.test(raw)) return raw;
  if (/^LAMPIRAN\s+/.test(raw)) return raw.replace(/^LAMPIRAN\s+/, 'LAMP ');
  return `LAMP ${raw}`;
}

export const QUICK_WINS_PROGRAMS: string[] = [
  'Quick Wins 1 — Perbaikan Interaksi Polisi dengan Masyarakat',
  'Quick Wins 2 — Optimalisasi Pengamanan Kegiatan Masyarakat',
  'Quick Wins 3 — Patroli Sambang & Bhabinkamtibmas Terpadu',
  'Quick Wins 4 — Pelayanan Publik Presisi Bebas Pungli',
  'Quick Wins 5 — Penanganan Gangguan Kamtibmas & Keramaian',
  'Quick Wins 6 — Penguatan Sinergi Sekolah & Generasi Muda',
  'Quick Wins 7 — Digitalisasi Pelaporan & Administrasi Operasional',
  'Quick Wins 8 — Respon Cepat Aduan & Pengaduan Masyarakat',
];

export const SATKER_PRESETS: SatkerPreset[] = [
  {
    id: 'polrestabes-semarang',
    label: 'POLRESTABES SEMARANG POLDA JAWA TENGAH',
    shortLabel: 'Polrestabes Semarang',
    polda: 'Polda Jawa Tengah',
    polres: 'Polrestabes Semarang',
    polsek: '',
    kopLine1: 'KEPOLISIAN NEGARA REPUBLIK INDONESIA',
    kopLine2: 'DAERAH JAWA TENGAH',
    kopLine3: 'RESOR KOTA BESAR SEMARANG',
    lampiranHeaderTitle: 'LAMP SPRIN KAPOLRESTABES SMG',
    pejabatJabatan: 'KAPOLRESTABES SEMARANG POLDA JATENG',
    pejabatNama: 'ERLIN TANG JAYA, S.H., S.I.K., M.H.',
    pejabatPangkatNrp: 'KOMISARIS BESAR POLISI NRP 78061264',
    stampResorText: 'POLRI DAERAH JAWA TENGAH',
    stampSektorText: 'RESOR KOTA BESAR SEMARANG',
  },
  {
    id: 'semarang-selatan',
    label: 'POLSEK SEMARANG SELATAN POLRESTABES SEMARANG',
    shortLabel: 'Polsek Semarang Selatan',
    polda: 'Polda Jawa Tengah',
    polres: 'Polrestabes Semarang',
    polsek: 'Polsek Semarang Selatan',
    kopLine1: 'POLRI DAERAH JAWA TENGAH',
    kopLine2: 'RESOR KOTA BESAR SEMARANG',
    kopLine3: 'SEKTOR SEMARANG SELATAN',
    lampiranHeaderTitle: 'LAMP SPRIN KAPOLSEK SMG SELATAN',
    pejabatJabatan: 'KAPOLSEK SEMARANG SELATAN POLRESTABES SEMARANG',
    pejabatNama: 'RISMANTO, S.H.,M.H.',
    pejabatPangkatNrp: 'KOMISARIS POLISI NRP 73020406',
    stampResorText: 'POLRI RESOR KOTA BESAR SEMARANG',
    stampSektorText: 'SEKTOR SEMARANG SELATAN',
  },
  {
    id: 'semarang-tengah',
    label: 'POLSEK SEMARANG TENGAH POLRESTABES SEMARANG',
    shortLabel: 'Polsek Semarang Tengah',
    polda: 'Polda Jawa Tengah',
    polres: 'Polrestabes Semarang',
    polsek: 'Polsek Semarang Tengah',
    kopLine1: 'POLRI DAERAH JAWA TENGAH',
    kopLine2: 'RESOR KOTA BESAR SEMARANG',
    kopLine3: 'SEKTOR SEMARANG TENGAH',
    lampiranHeaderTitle: 'LAMP SPRIN KAPOLSEK SMG TGH',
    pejabatJabatan: 'KAPOLSEK SEMARANG TENGAH POLRESTABES SEMARANG',
    pejabatNama: 'SUYITNO, S.H., M.H.',
    pejabatPangkatNrp: 'KOMISARIS POLISI NRP 74050318',
    stampResorText: 'POLRI RESOR KOTA BESAR SEMARANG',
    stampSektorText: 'SEKTOR SEMARANG TENGAH',
  },
  {
    id: 'candisari',
    label: 'POLSEK CANDISARI POLRESTABES SEMARANG',
    shortLabel: 'Polsek Candisari',
    polda: 'Polda Jawa Tengah',
    polres: 'Polrestabes Semarang',
    polsek: 'Polsek Candisari',
    kopLine1: 'POLRI DAERAH JAWA TENGAH',
    kopLine2: 'RESOR KOTA BESAR SEMARANG',
    kopLine3: 'SEKTOR CANDISARI',
    lampiranHeaderTitle: 'LAMP SPRIN KAPOLSEK CANDISARI',
    pejabatJabatan: 'KAPOLSEK CANDISARI POLRESTABES SEMARANG',
    pejabatNama: 'AGUS PRASETYO, S.I.K.',
    pejabatPangkatNrp: 'AKP NRP 82080412',
    stampResorText: 'POLRI RESOR KOTA BESAR SEMARANG',
    stampSektorText: 'SEKTOR CANDISARI',
  },
];

const NOMINATIF_POLSEK_SMG_SELATAN: PersonnelRow[] = [
  { id: 'pers-nom-1', nama: 'RISMANTO,S.H.,M.H.', pangkat: 'KOMPOL', nrp: '73020406', jabatan: 'KAPOLSEK', ket: '' },
  { id: 'pers-nom-2', nama: 'GINYONO,S.H.', pangkat: 'AKP', nrp: '70100153', jabatan: 'WAKA POLSEK', ket: '' },
  { id: 'pers-nom-3', nama: 'KISWORO, S.H.', pangkat: 'IPTU', nrp: '71070044', jabatan: 'PS. KANITBINMAS', ket: '' },
  { id: 'pers-nom-4', nama: 'Dr. TRI SUTRINO,S.H.,M.H.', pangkat: 'IPTU', nrp: '72050205', jabatan: 'KANIT RESKRIM', ket: '' },
  { id: 'pers-nom-5', nama: 'SUBIANTO, S.H.', pangkat: 'IPTU', nrp: '72100003', jabatan: 'KANITINTELKAM', ket: '' },
  { id: 'pers-nom-6', nama: 'M. ALI MAGHFUR,S.H.', pangkat: 'IPTU', nrp: '74080418', jabatan: 'PS.KANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-7', nama: 'TEGUH SANTOSO,S.H.,M.M.', pangkat: 'IPDA', nrp: '83120118', jabatan: 'KANIT PROPAM', ket: '' },
  { id: 'pers-nom-8', nama: 'SUKIJAN', pangkat: 'AIPTU', nrp: '69010254', jabatan: 'PS.PANITOPSNAL 1 UNIT RESKRIM', ket: '' },
  { id: 'pers-nom-9', nama: 'ADI GESIT SATATA', pangkat: 'AIPTU', nrp: '72120148', jabatan: 'BANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-10', nama: 'ANDI SETIYANTO', pangkat: 'AIPTU', nrp: '73120096', jabatan: 'BHABIN MUGASSARI', ket: '' },
  { id: 'pers-nom-11', nama: 'I YADI YANTO SUPYAN', pangkat: 'AIPTU', nrp: '74020269', jabatan: 'BHABIN WONODRI', ket: '' },
  { id: 'pers-nom-12', nama: 'AHMAD SOKI', pangkat: 'AIPTU', nrp: '75050022', jabatan: 'PS. PANIT 3 SAMAPTA', ket: '' },
  { id: 'pers-nom-13', nama: 'TAUFIKURAHMAN', pangkat: 'AIPTU', nrp: '76040696', jabatan: 'PS. PANIT 2 LANTAS', ket: '' },
  { id: 'pers-nom-14', nama: 'AGUS PURNOMO', pangkat: 'AIPTU', nrp: '78081511', jabatan: 'PS. PANIT 1 SAMAPTA', ket: '' },
  { id: 'pers-nom-15', nama: 'HARDIYANTO', pangkat: 'AIPTU', nrp: '79010899', jabatan: 'BANIT INTELKAM', ket: '' },
  { id: 'pers-nom-16', nama: 'AGUS PRASTYANTO', pangkat: 'AIPTU', nrp: '79021084', jabatan: 'PS. KASIHUMAS', ket: '' },
  { id: 'pers-nom-17', nama: 'METRIZAL, S.H.', pangkat: 'AIPTU', nrp: '79051605', jabatan: 'BHABIN RANDUSARI', ket: '' },
  { id: 'pers-nom-18', nama: 'ALI MAHFUD', pangkat: 'AIPTU', nrp: '79081059', jabatan: 'PS. KA SIUM', ket: '' },
  { id: 'pers-nom-19', nama: 'SYAIFUL BAHRI, S.H.', pangkat: 'AIPTU', nrp: '80030582', jabatan: 'PS.KA SPKT 1', ket: '' },
  { id: 'pers-nom-20', nama: 'SUHARTANTO, S.H.', pangkat: 'AIPTU', nrp: '80040997', jabatan: 'BHABIN PLEBURAN', ket: '' },
  { id: 'pers-nom-21', nama: 'ANTON RAHARDJO, S.H.', pangkat: 'AIPTU', nrp: '80100908', jabatan: 'PS. PANITOPSNAL INTEL', ket: '' },
  { id: 'pers-nom-22', nama: 'EKO PRIYANTO, S.H.', pangkat: 'AIPTU', nrp: '81050986', jabatan: 'BANIT RESKRIM', ket: '' },
  { id: 'pers-nom-23', nama: 'BAMBANG TYAS CAHYA YULIANTO', pangkat: 'AIPTU', nrp: '81070388', jabatan: 'PS.PANITOPSNAL 3 UNIT RESKRIM', ket: '' },
  { id: 'pers-nom-24', nama: 'SUTADI DWI SETYONO', pangkat: 'AIPTU', nrp: '82090194', jabatan: 'BANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-25', nama: 'SINGGIH RIYADI', pangkat: 'AIPTU', nrp: '83070106', jabatan: 'PS.PANITOPSNAL 2 UNIT RESKRIM', ket: '' },
  { id: 'pers-nom-26', nama: 'BANGUN WASKITO, S.H.', pangkat: 'AIPTU', nrp: '83070934', jabatan: 'PS.KA SPKT 2', ket: '' },
  { id: 'pers-nom-27', nama: 'FERY EKO SAPUTRO', pangkat: 'AIPTU', nrp: '84050075', jabatan: 'BANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-28', nama: 'SUPRIYATNO', pangkat: 'AIPDA', nrp: '72100456', jabatan: 'BANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-29', nama: 'MUSLIH', pangkat: 'AIPDA', nrp: '78041138', jabatan: 'BHABIN LAMPER KIDUL', ket: '' },
  { id: 'pers-nom-30', nama: 'TONO WIYONO', pangkat: 'AIPDA', nrp: '80110655', jabatan: 'BANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-31', nama: 'EDI BAMBANG MUDIONO', pangkat: 'AIPDA', nrp: '82120819', jabatan: 'BHABIN BULUSTALAN', ket: '' },
  { id: 'pers-nom-32', nama: 'WARDOYO', pangkat: 'AIPDA', nrp: '83101282', jabatan: 'BANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-33', nama: 'A. ADI WIDYANTORO, S.H.', pangkat: 'AIPDA', nrp: '84030769', jabatan: 'BHABIN LAMPER LOR', ket: '' },
  { id: 'pers-nom-34', nama: 'JATMIKO NUR. P, S.H.', pangkat: 'AIPDA', nrp: '84051714', jabatan: 'PS. PANIT 2 SAMAPTA', ket: '' },
  { id: 'pers-nom-35', nama: 'ANDI WIBAWA', pangkat: 'AIPDA', nrp: '84081372', jabatan: 'PS. PANIT 1 LANTAS', ket: '' },
  { id: 'pers-nom-36', nama: 'CANDRA MARMESA, S.H.', pangkat: 'AIPDA', nrp: '84091212', jabatan: 'BHABIN LAMPER TENGAH', ket: '' },
  { id: 'pers-nom-37', nama: 'PURBO DWI LAKSONO', pangkat: 'AIPDA', nrp: '84091593', jabatan: 'BANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-38', nama: 'SINAR EKO PANUNTUN', pangkat: 'AIPDA', nrp: '84120677', jabatan: 'BANIT SAMAPTA', ket: '' },
  { id: 'pers-nom-39', nama: 'DEDY SETYO WIDODO', pangkat: 'AIPDA', nrp: '84120839', jabatan: 'BANIT PROPAM', ket: '' },
  { id: 'pers-nom-40', nama: 'AGUNG WITONO', pangkat: 'AIPDA', nrp: '84121525', jabatan: 'BANIT RESKRIM', ket: '' },
  { id: 'pers-nom-41', nama: 'IJMAL AKMAL, S.H.', pangkat: 'AIPDA', nrp: '85011391', jabatan: 'BANIT RESKRIM', ket: '' },
  { id: 'pers-nom-42', nama: 'ACHMAD TAUFIK, S.H.', pangkat: 'AIPDA', nrp: '85020792', jabatan: 'PS.PANITYANMIN UNIT INTELKAM', ket: '' },
  { id: 'pers-nom-43', nama: 'MUCHAMAD TOFIQ HIDAYAT, S.H.', pangkat: 'AIPDA', nrp: '85041815', jabatan: 'PS. KA SPKT 3', ket: '' },
  { id: 'pers-nom-44', nama: 'DODIK EKO ARIPRABOWO, S.H.', pangkat: 'AIPDA', nrp: '85061749', jabatan: 'PS. PANIT 2 BINMAS', ket: '' },
  { id: 'pers-nom-45', nama: 'ERI SETYAWAN', pangkat: 'AIPDA', nrp: '85081180', jabatan: 'BANIT LANTAS', ket: '' },
  { id: 'pers-nom-46', nama: 'YUDHA SEPTYAWAN', pangkat: 'AIPDA', nrp: '85090287', jabatan: 'BHABIN PETERONGAN', ket: '' },
  { id: 'pers-nom-47', nama: 'ARIS ARDIANSYAH, S.H.', pangkat: 'AIPDA', nrp: '86020708', jabatan: 'PS. PANITMIN INTEL', ket: '' },
  { id: 'pers-nom-48', nama: 'ACHMAD ARWANI, S,Psi', pangkat: 'AIPDA', nrp: '86051244', jabatan: 'BHABIN BARUSARI', ket: '' },
  { id: 'pers-nom-49', nama: 'SARWO EDY', pangkat: 'AIPDA', nrp: '86121201', jabatan: 'PS. PANIT 1 UNIT BINMAS', ket: '' },
  { id: 'pers-nom-50', nama: 'HENGKI SETIAJI WIBOWO', pangkat: 'AIPDA', nrp: '87110151', jabatan: 'BAMIN SPKT 1', ket: '' },
  { id: 'pers-nom-51', nama: 'HERRY PUSPITA WIJAYA, S.H.', pangkat: 'AIPDA', nrp: '88040065', jabatan: 'BANIT INTELKAM', ket: '' },
  { id: 'pers-nom-52', nama: 'WAHYU ARIEF S', pangkat: 'BRIPKA', nrp: '87070766', jabatan: 'BAMIN SPKT 1', ket: '' },
  { id: 'pers-nom-53', nama: 'WIWIK HARYANTO', pangkat: 'BRIPKA', nrp: '77070917', jabatan: 'BAMIN SPKT 2', ket: '' },
  { id: 'pers-nom-54', nama: 'MUNIFATUL LUTHFIAH', pangkat: 'BRIGADIR', nrp: '95100760', jabatan: 'BANIT BINMAS', ket: '' },
  { id: 'pers-nom-55', nama: 'AFIF YUDHA PRATAMA', pangkat: 'BRIPTU', nrp: '97040637', jabatan: 'BAMIN SPKT 3', ket: '' },
  { id: 'pers-nom-56', nama: 'ARIEF MUNDRIANTO,S.H.', pangkat: 'AIPTU', nrp: '82050373', jabatan: 'BA POLSEK', ket: '' },
  { id: 'pers-nom-57', nama: 'TRIMANTO', pangkat: 'AIPTU', nrp: '73050517', jabatan: 'BAPOLSEK', ket: '' },
  { id: 'pers-nom-58', nama: 'YUNI KURNIA HAPSARI', pangkat: 'PENGATUR', nrp: '197906252014122003', jabatan: 'BANUM SIUM', ket: '' },
];

const EXISTING_OTHER_PERSONNEL: PersonnelRow[] = [
  {
    id: 'pers-0',
    nama: 'AGUS NURYANTO, S.H.',
    pangkat: 'IPTU',
    nrp: '73090344',
    jabatan: 'PS. KANITLANTAS POLSEK SMG SELATAN POLRESTABES SMG',
    ket: '',
  },
  {
    id: 'pers-6',
    nama: 'HARSONO',
    pangkat: 'IPTU',
    nrp: '76080214',
    jabatan: 'KANIT BINMAS',
    ket: '',
  },
  {
    id: 'pers-7',
    nama: 'BUDI SANTOSO, S.H.',
    pangkat: 'AIPDA',
    nrp: '86041095',
    jabatan: 'BHABIN WONODRI',
    ket: '',
  },
  {
    id: 'pers-8',
    nama: 'RENDRA KUSUMA',
    pangkat: 'BRIPKA',
    nrp: '89110342',
    jabatan: 'BANIT INTELKAM',
    ket: '',
  },
  {
    id: 'pers-9',
    nama: 'DWI PRASETYO',
    pangkat: 'AIPTU',
    nrp: '77090188',
    jabatan: 'KA SPKT 1',
    ket: '',
  },
];

export function mergePersonnelByNrp(
  baseList: PersonnelRow[],
  incomingList: PersonnelRow[]
): PersonnelRow[] {
  const byNrp = new Map<string, PersonnelRow>();
  const order: string[] = [];

  const upsert = (row: PersonnelRow) => {
    const key = row.nrp.trim();
    if (!key) return;
    if (!byNrp.has(key)) {
      order.push(key);
      byNrp.set(key, { ...row });
    } else {
      const existing = byNrp.get(key)!;
      byNrp.set(key, { ...existing, ...row, id: existing.id || row.id });
    }
  };

  baseList.forEach(upsert);
  incomingList.forEach(upsert);

  return order.map((key) => byNrp.get(key)!);
}

export const INITIAL_PERSONNEL_ROSTER: PersonnelRow[] = mergePersonnelByNrp(
  EXISTING_OTHER_PERSONNEL,
  NOMINATIF_POLSEK_SMG_SELATAN
);

export const DEFAULT_STAMP_IMAGE_URL = '/assets/aistudio/NEW_STAMPLE__2__a18bbd20.png';

export const DEFAULT_STAMP_CONFIG: StampSignatureConfig = {
  stampImageDataUrl: DEFAULT_STAMP_IMAGE_URL,
  stampSizeCm: 4.7,
  stampOffsetXMm: 2,
  stampOffsetYMm: 2,
  stampMultiplyBlend: true,
  signatureImageDataUrl: null,
  signatureWidthCm: 5.2,
  signatureOffsetXMm: 18,
  signatureOffsetYMm: 14,
  signatureMultiplyBlend: true,
  aboveText: true,
};

export const LAMPIRAN_TABLE_TOTAL_MM = 170;

export const DEFAULT_LAMPIRAN_COL_WIDTHS: LampiranColumnWidths = {
  no: 10,
  nama: 40,
  pangkat: 24,
  nrp: 24,
  jabatan: 47,
  ket: 25,
};

export const LAMPIRAN_COL_MIN_WIDTHS: LampiranColumnWidths = {
  no: 8,
  nama: 20,
  pangkat: 14,
  nrp: 16,
  jabatan: 20,
  ket: 10,
};

export function getNormalizedLampiranColWidths(
  widths?: Partial<LampiranColumnWidths>
): LampiranColumnWidths {
  const raw: LampiranColumnWidths = {
    no: Math.max(LAMPIRAN_COL_MIN_WIDTHS.no, Number(widths?.no) || DEFAULT_LAMPIRAN_COL_WIDTHS.no),
    nama: Math.max(
      LAMPIRAN_COL_MIN_WIDTHS.nama,
      Number(widths?.nama) || DEFAULT_LAMPIRAN_COL_WIDTHS.nama
    ),
    pangkat: Math.max(
      LAMPIRAN_COL_MIN_WIDTHS.pangkat,
      Number(widths?.pangkat) || DEFAULT_LAMPIRAN_COL_WIDTHS.pangkat
    ),
    nrp: Math.max(
      LAMPIRAN_COL_MIN_WIDTHS.nrp,
      Number(widths?.nrp) || DEFAULT_LAMPIRAN_COL_WIDTHS.nrp
    ),
    jabatan: Math.max(
      LAMPIRAN_COL_MIN_WIDTHS.jabatan,
      Number(widths?.jabatan) || DEFAULT_LAMPIRAN_COL_WIDTHS.jabatan
    ),
    ket: Math.max(
      LAMPIRAN_COL_MIN_WIDTHS.ket,
      Number(widths?.ket) || DEFAULT_LAMPIRAN_COL_WIDTHS.ket
    ),
  };

  const sum = raw.no + raw.nama + raw.pangkat + raw.nrp + raw.jabatan + raw.ket;
  if (Math.abs(sum - LAMPIRAN_TABLE_TOTAL_MM) < 0.05) {
    return raw;
  }

  const scale = LAMPIRAN_TABLE_TOTAL_MM / sum;
  const no = +(raw.no * scale).toFixed(1);
  const nama = +(raw.nama * scale).toFixed(1);
  const pangkat = +(raw.pangkat * scale).toFixed(1);
  const nrp = +(raw.nrp * scale).toFixed(1);
  const jabatan = +(raw.jabatan * scale).toFixed(1);
  const ket = +(LAMPIRAN_TABLE_TOTAL_MM - (no + nama + pangkat + nrp + jabatan)).toFixed(1);
  return { no, nama, pangkat, nrp, jabatan, ket };
}

export const DEFAULT_SPRIN_DOCUMENT: SprinDocument = {
  id: 'sprin-213-x-2026',
  status: 'Siap Cetak',
  updatedAt: '2026-11-20T08:30:00.000Z',
  useLampiran: true,

  // Identitas Kesatuan
  polda: 'Polda Jawa Tengah',
  polres: 'Polrestabes Semarang',
  polsek: 'Polsek Semarang Selatan',
  tanggalKegiatan: '2026-11-21',
  pelaporNamaPangkat: 'KOMPOL RISMANTO, S.H.,M.H.',
  pelaporJabatan: 'Kapolsek Semarang Selatan',
  programQuickWins: 'Quick Wins 5 — Penanganan Gangguan Kamtibmas & Keramaian',

  // Surat Perintah Halaman 1
  kopLine1: 'POLRI DAERAH JAWA TENGAH',
  kopLine2: 'RESOR KOTA BESAR SEMARANG',
  kopLine3: 'SEKTOR SEMARANG SELATAN',
  nomorSprin: 'Sprin/213/X/HUK.6.6./2026',
  pertimbangan:
    'untuk kelancaran pelaksanaan Kegiatan KRYD dan menjaga situasi Kamtibmas di wilayah Hukum Polsek Semarang Selatan, maka perlu diterbitkan surat perintah;',
  dasarList: [
    'Undang-Undang Nomor 5 Tahun 2026 tentang Perubahan Ketiga atas Undang-Undang Nomor 2 Tahun 2002 tentang Kepolisian Negara Republik Indonesia;',
    'petunjuk dan arahan Kapolrestabes Semarang, tentang pelaksanaan KRYD;',
  ],
  kepadaText:
    'NAMA, PANGKAT/NRP/NIP DAN JABATAN SEBAGAIMANA YANG TERCANTUM DALAM LAMPIRAN SURAT PERINTAH INI.',
  untukList: [
    'disamping melaksanakan tugas dan tanggungjawabnya sehari-hari, juga melaksanakan kegiatan KRYD dengan sasaran balap liar dan taruwan / kenakalan remaja;',
    'Kegiatan dilaksanakan pada hari Sabtu tanggal 21 November 2026 pukul 22.00 Wib s.d selesai. Di wilayah Hukum Polsek Semarang Selatan (Strong Point di jl Kompol Maksum);',
    'melaksanakan perintah ini dengan seksama dan penuh rasa tanggung jawab;',
    'melaporkan hasil pelaksanaan kegiatan kepada Kapolsek Semarang Selatan;',
  ],
  tembusanList: [
    'Kapolrestabes Semarang',
    'Wakapolrestabes Semarang',
    'Kabagops Polrestabes Semarang.',
  ],
  kataSambung: '',

  // Header Halaman 2+ & Lampiran
  sprinHeaderTitle: '',
  lampiranHeaderTitle: 'LAMP SPRIN KAPOLSEK SMG SELATAN',
  lampiranNomor: 'SPRIN/213/X/HUK.6.6./2026',
  lampiranTanggalUpper: '20   NOVEMBER 2026',
  lampiranJudul: 'DAFTAR NAMA PERSONEL KRYD',
  lampiranSubjudul: 'PADA HARI SABTU TANGGAL 21 NOVEMBER 2026',
  lampiranColWidths: { ...DEFAULT_LAMPIRAN_COL_WIDTHS },
  personelList: [
    {
      id: 'pers-213-1',
      nama: 'SUBIANTO, S.H.',
      pangkat: 'IPTU',
      nrp: '72100003',
      jabatan: 'KANITINTELKAM',
      ket: 'PADAL',
    },
    {
      id: 'pers-213-2',
      nama: 'A. ADI WIDYANTORO, S.H.',
      pangkat: 'AIPTU',
      nrp: '84030769',
      jabatan: 'BHABIN LAMPER LOR',
      ket: 'ANGGOTA',
    },
    {
      id: 'pers-213-3',
      nama: 'FERY EKO SAPUTRO',
      pangkat: 'AIPTU',
      nrp: '84050075',
      jabatan: 'BANIT SAMAPTA',
      ket: 'SDA',
    },
    {
      id: 'pers-213-4',
      nama: 'SINGGIH RIYADI',
      pangkat: 'AIPTU',
      nrp: '83070106',
      jabatan: 'PS.PANITOPSNAL 2 UNIT RESKRIM',
      ket: 'SDA',
    },
    {
      id: 'pers-213-5',
      nama: 'SARWO EDY',
      pangkat: 'AIPDA',
      nrp: '86121201',
      jabatan: 'PS. PANIT 1 UNIT BINMAS',
      ket: 'SDA',
    },
    {
      id: 'pers-213-6',
      nama: 'IJMAL AKMAL, S.H.',
      pangkat: 'AIPDA',
      nrp: '85011391',
      jabatan: 'BANIT RESKRIM',
      ket: 'SDA',
    },
    {
      id: 'pers-213-7',
      nama: 'HARDIYANTO',
      pangkat: 'AIPTU',
      nrp: '79010899',
      jabatan: 'BANIT INTELKAM',
      ket: 'SDA',
    },
  ],

  // Pengesahan & Pejabat
  dikeluarkanDi: 'Semarang',
  tanggalSuratHal1: '20       November 2026',
  tanggalSuratHal2: '20       November 2026',
  pejabatJabatan: 'KAPOLSEK SEMARANG SELATAN POLRESTABES SEMARANG',
  pejabatNama: 'RISMANTO, S.H.,M.H.',
  pejabatPangkatNrp: 'KOMISARIS POLISI NRP 73020406',
  showStampAndSignature: true,
  stampResorText: 'POLRI RESOR KOTA BESAR SEMARANG',
  stampSektorText: 'SEKTOR SEMARANG SELATAN',
  stampConfig: { ...DEFAULT_STAMP_CONFIG },
};

export const INITIAL_ARCHIVE_DOCUMENTS: SprinDocument[] = [
  DEFAULT_SPRIN_DOCUMENT,
  {
    ...DEFAULT_SPRIN_DOCUMENT,
    id: 'sprin-1488-x-2026',
    status: 'Siap Cetak',
    updatedAt: '2026-10-29T08:30:00.000Z',
    useLampiran: false,
    tanggalKegiatan: '2026-10-29',
    pelaporNamaPangkat: 'IPTU AGUS NURYANTO, S.H.',
    pelaporJabatan: 'Ps. Kanitlantas Polsek Semarang Selatan',
    programQuickWins: 'Quick Wins 7 — Digitalisasi Pelaporan & Administrasi Operasional',
    kopLine1: 'KEPOLISIAN NEGARA REPUBLIK INDONESIA',
    kopLine2: 'DAERAH JAWA TENGAH',
    kopLine3: 'RESOR KOTA BESAR SEMARANG',
    nomorSprin: 'Sprin/ 1488 /X/KEP./2026',
    pertimbangan:
      'guna tertib administrasi khususnya dalam rangka pelaksanaan tugas di lingkungan Polrestabes Semarang, dipandang perlu mengeluarkan surat perintah.',
    dasarList: [
      'Peraturan Kepolisian Negara Republik Indonesia Nomor 2 Tahun 2021 tentang Susunan Organisasi dan Tata Kerja pada tingkat Kepolisian Resor dan Kepolisian Sektor sebagaimana telah diubah dengan Peraturan Kepolisian Negara Republik Indonesia Nomor 7 Tahun 2025 tentang Perubahan atas Peraturan Kepolisian Negara Republik Indonesia Nomor 2 Tahun 2021 tentang Susunan Organisasi dan Tata Kerja pada tingkat Kepolisian Resor dan Kepolisian Sektor.',
    ],
    untukList: [
      'sambil menunggu keputusan yang bersifat definitif, agar melaksanakan tugas sebagai Pama Polrestabes Semarang;',
      'melaksanakan perintah ini dengan seksama dan penuh rasa tanggung jawab;',
      'surat perintah ini berlaku sejak dikeluarkan sampai dengan adanya keputusan yang berkaitan dengan penempatannya.',
    ],
    tembusanList: [
      'Kasiwas Polrestabes Semarang.',
      'Kasipropam Polrestabes Semarang.',
      'Kapolsek Semarang Selatan Polrestabes Semarang.',
    ],
    lampiranNomor: 'SPRIN / 1488 /X/ KEP./ 2026',
    lampiranTanggalUpper: '29 OKTOBER 2026',
    lampiranJudul: 'DAFTAR NAMA PERSONEL YANG DIPERINTAHKAN',
    lampiranSubjudul: 'PADA TANGGAL 29 OKTOBER 2026',
    tanggalSuratHal1: '29       Oktober 2026',
    tanggalSuratHal2: '29       Oktober 2026',
    pejabatJabatan: 'KAPOLRESTABES SEMARANG POLDA JATENG',
    pejabatNama: 'ERLIN TANG JAYA, S.H., S.I.K., M.H.',
    pejabatPangkatNrp: 'KOMISARIS BESAR POLISI NRP 78061264',
    stampResorText: 'POLRI DAERAH JAWA TENGAH',
    stampSektorText: 'RESOR KOTA BESAR SEMARANG',
    personelList: [INITIAL_PERSONNEL_ROSTER[0]],
  },
  {
    ...DEFAULT_SPRIN_DOCUMENT,
    id: 'sprin-211-xi-2026',
    status: 'Terbit',
    updatedAt: '2026-11-18T08:30:00.000Z',
    useLampiran: true,
    kopLine1: 'POLRI DAERAH JAWA TENGAH',
    kopLine2: 'RESOR KOTA BESAR SEMARANG',
    kopLine3: 'SEKTOR SEMARANG SELATAN',
    nomorSprin: 'Sprin /  211  / XI / HUK.6.6./2026',
    pertimbangan:
      'bahwa dalam untuk kelancaran kegiatan Pentas Seni di SMAN 11 Semarang, maka dipandang perlu mengeluarkan Surat Perintah ini.',
    dasarList: [
      'undang – Undang Republik Indonesia Nomor 2 tahun 2002 tentang Kepolisian Negara Republik Indonesia.',
      'surat rekomendasi Kapolsek Semarang Selatan Nomor : B/    /XI/YAN.2.4/2025, Tanggal    November 2026 tentang rekomendasi keramaian.',
    ],
    untukList: [
      'disamping tugas sehari – hari agar melaksanakan pengamanan Pentas Seni yang diselenggarakan oleh SMAN 11 Semarang;',
      'kegiatan dilaksanakan pada hari Kamis tanggal 19 November 2026 pukul 09.00 s,d 17.00 Wib;',
      'melaporkan hasil pelaksanaan tugas kepada Kapolsek;',
      'melaksanakan perintah ini dengan seksama dan penuh rasa tanggung jawab.',
    ],
    tembusanList: ['Kapolrestabes Semarang', 'Kabagops Polrestabes Smg'],
    lampiranHeaderTitle: 'LAMP SPRIN KAPOLSEK SMG SELATAN',
    lampiranNomor: 'SPRIN /   211   /XI/ HUK.6.6./ 2026',
    lampiranTanggalUpper: '18        NOVEMBER 2026',
    lampiranJudul: 'DAFTAR NAMA PERS PENGAMANAN PENSI SMAN 11 SEMARANG',
    lampiranSubjudul: 'PADA HARI KAMIS TANGGAL 19 NOVEMBER 2026',
    tanggalSuratHal1: '5       November 2026',
    tanggalSuratHal2: '18        November 2026',
    pejabatJabatan: 'KAPOLSEK SEMARANG SELATAN POLRESTABES SEMARANG',
    pejabatNama: 'RISMANTO, S.H.,M.H.',
    pejabatPangkatNrp: 'KOMISARIS POLISI NRP 73020406',
    stampResorText: 'POLRI RESOR KOTA BESAR SEMARANG',
    stampSektorText: 'SEKTOR SEMARANG SELATAN',
    personelList: INITIAL_PERSONNEL_ROSTER.filter((p) =>
      ['75050022', '84091212', '78041138', '84030769', '85090287'].includes(p.nrp)
    ).map((p) => ({ ...p })),
  },
];

export const SPRIN_OLGA_DOCUMENT: SprinDocument = {
  ...DEFAULT_SPRIN_DOCUMENT,
  id: 'template-sprin-olga',
  status: 'Siap Cetak',
  updatedAt: '2026-11-05T08:00:00.000Z',
  useLampiran: true,

  // Identitas Kesatuan
  polda: 'Polda Jawa Tengah',
  polres: 'Polrestabes Semarang',
  polsek: 'Polsek Semarang Selatan',
  tanggalKegiatan: '2026-11-06',
  pelaporNamaPangkat: 'KOMPOL RISMANTO, S.H.,M.H.',
  pelaporJabatan: 'Kapolsek Semarang Selatan',
  programQuickWins: 'Quick Wins 1 — Perbaikan Interaksi Polisi dengan Masyarakat',

  // Surat Perintah Halaman 1
  kopLine1: 'POLRI DAERAH JAWA TENGAH',
  kopLine2: 'RESOR KOTA BESAR SEMARANG',
  kopLine3: 'SEKTOR SEMARANG SELATAN',
  nomorSprin: 'Sprin / 196 / XI / BIN.2.1./2026',
  pertimbangan:
    'bahwa dalam rangka mendukung pembinaan jasmani guna meningkatkan kebugaran dan menjaga kondisi kesamaptaan serta kesehatan anggota, maka dipandang perlu mengeluarkan Surat Perintah ini.',
  dasarList: [
    'undang – Undang Republik Indonesia Nomor 2 tahun 2002 tentang Kepolisian Negara Republik Indonesia.',
    'surat Telegram Kapolrestabes Semarang Nomor : ST/118/VII/BIN2.4/2025, Tanggal Juli 2025 tentang Anev Olah Raga bersama.',
  ],
  kepadaText:
    'NAMA, PANGKAT, NRP DAN JABATANNYA SEPERTI TERSEBUT DALAM LAMPIRAN SURAT PERINTAH INI.',
  untukList: [
    'disamping tugas sehari – hari agar melaksanakan kegiatan Olah raga bersama tingkat Polrestabes Semarang pada:\na. Hari : Jumat.\nb. Tanggal : 6 November 2026\nc. Pukul : 07.30 Wib s/d Selesai.\nd. Tempat : di Halaman Apel Polrestabes Semarang.',
    'dengan menggunakan pakaian olah raga Training warna kuning;',
    'melaporkan hasil pelaksanaan tugas kepada Kapolsek;',
    'melaksanakan perintah ini dengan seksama dan penuh rasa tanggung jawab.',
  ],
  tembusanList: ['Kapolrestabes Semarang', 'Kabag SDM Polrestabes Smg'],
  kataSambung: '',

  // Header Halaman 2 & Lampiran
  sprinHeaderTitle: '',
  lampiranHeaderTitle: 'LAMP SPRIN KAPOLSEK SMG SELATAN',
  lampiranNomor: 'SPRIN / 196 /XI/ BIN.2.1./ 2026',
  lampiranTanggalUpper: '5        NOVEMBER 2026',
  lampiranJudul: 'DAFTAR NAMA PERS OLAH RAGA BERSAMA',
  lampiranSubjudul: 'PADA HARI JUMAT TANGGAL 6 NOVEMBER 2026',
  lampiranColWidths: { ...DEFAULT_LAMPIRAN_COL_WIDTHS },
  personelList: [
    {
      id: 'pers-olga-1',
      nama: 'AHMAD SOKI',
      pangkat: 'AIPTU',
      nrp: '75050022',
      jabatan: 'PS. PANIT 3 SAMAPTA',
      ket: '',
    },
    {
      id: 'pers-olga-2',
      nama: 'ANDI WIBAWA',
      pangkat: 'AIPDA',
      nrp: '84081372',
      jabatan: 'PS.PANIT 1 LANTAS',
      ket: '',
    },
    {
      id: 'pers-olga-3',
      nama: 'YUNI KURNIA HAPSARI, S.H.',
      pangkat: 'PENGATUR',
      nrp: '197906252014122003',
      jabatan: 'BANUM SIUM',
      ket: '',
    },
  ],

  // Pengesahan & Pejabat
  dikeluarkanDi: 'Semarang',
  tanggalSuratHal1: '5       November 2026',
  tanggalSuratHal2: '5       November 2026',
  pejabatJabatan: 'KAPOLSEK SEMARANG SELATAN POLRESTABES SEMARANG',
  pejabatNama: 'RISMANTO, S.H.,M.H.',
  pejabatPangkatNrp: 'KOMISARIS POLISI NRP 73020406',
  showStampAndSignature: true,
  stampResorText: 'POLRI RESOR KOTA BESAR SEMARANG',
  stampSektorText: 'SEKTOR SEMARANG SELATAN',
  stampConfig: { ...DEFAULT_STAMP_CONFIG },
};

export const SPRIN_PEMAKAMAN_DOCUMENT: SprinDocument = {
  ...DEFAULT_SPRIN_DOCUMENT,
  id: 'template-sprin-pemakaman',
  status: 'Siap Cetak',
  updatedAt: '2026-10-13T08:00:00.000Z',
  useLampiran: true,

  // Identitas Kesatuan
  polda: 'Polda Jawa Tengah',
  polres: 'Polrestabes Semarang',
  polsek: 'Polsek Semarang Selatan',
  tanggalKegiatan: '2026-10-13',
  pelaporNamaPangkat: 'KOMPOL RISMANTO, S.H.,M.H.',
  pelaporJabatan: 'Kapolsek Semarang Selatan',
  programQuickWins: 'Quick Wins 1 — Perbaikan Interaksi Polisi dengan Masyarakat',

  // Surat Perintah Halaman 1
  kopLine1: 'POLRI DAERAH JAWA TENGAH',
  kopLine2: 'RESOR KOTA BESAR SEMARANG',
  kopLine3: 'SEKTOR SEMARANG SELATAN',
  nomorSprin: 'Sprin / 164 / X / HUK.6.6./2026',
  pertimbangan:
    'bahwa untuk kelancaran kegiatan pemakaman anggota TNI/ Polri di wilayah hukum Polsek Semarang Selatan, maka dipandang perlu mengeluarkan Surat Perintah ini;',
  dasarList: [
    'undang – Undang Republik Indonesia Nomor 2 tahun 2002 tentang Kepolisian Negara Republik Indonesia;',
    'perintah Kapolrestabes Semarang pada hari Senin tanggal 12 Oktober 2026, tentang Pemakaman PURN AKBP FX.SUHERMAN, S.H.;',
  ],
  kepadaText:
    'NAMA, PANGKAT, NRP DAN JABATANNYA SEPERTI TERSEBUT DALAM LAMPIRAN SURAT PERINTAH INI;',
  untukList: [
    'Disamping melaksanakan tugas sehari-hari diperintahkan sebagai peserta Upacara persemayaman dan pemakaman PURN AKBP FX.SUHERMAN,S.H.;',
    'upacara akan di laksanakan pada:\na. Hari : Selasa;\nb. Tanggal : 13 Oktober 2026;\nc. Pukul dan tempat :\n- Persemayaman : pukul 09.30 Wib Di Rumah Duka Jl.Karangbendo 72d Rt 7 Rw 1 Kel. Karangrejo, Gajahmungkur Semarang\n- Pemakaman: pukul 10.00 Wib Di Tpu Sainoloyo Karangbendo Karangrejo Gajahmungkur Semarang;',
    'melaksanakan perintah ini dengan seksama dan penuh rasa tanggung jawab;',
    'melaporkan hasil pelaksanaan tugas kepada Kapolsek.',
  ],
  tembusanList: [],
  kataSambung: '',

  // Header Halaman 2 & Lampiran
  sprinHeaderTitle: '',
  lampiranHeaderTitle: 'LAMP SPRIN KAPOLSEK SMG SELATAN',
  lampiranNomor: 'SPRIN / 164 /X/ HUK.6.6./2026',
  lampiranTanggalUpper: '13       OKTOBER 2026',
  lampiranJudul: 'DAFTAR NAMA PERS PESERTA\nUPACARA PEMAKAMAN PURN AKBP FX SUHIRMAN SH',
  lampiranSubjudul: 'SELASA 13 OKTOBER 2026',
  lampiranColWidths: { ...DEFAULT_LAMPIRAN_COL_WIDTHS },
  personelList: [
    {
      id: 'pers-pmk-1',
      nama: 'AHMAD SOKI',
      pangkat: 'AIPTU',
      nrp: '75050022',
      jabatan: 'PS. PANIT 3 SAMAPTA',
      ket: '',
    },
    {
      id: 'pers-pmk-2',
      nama: 'JATMIKO NUR P, SH',
      pangkat: 'AIPDA',
      nrp: '84051714',
      jabatan: 'PS.PANIT 2 SAMAPTA',
      ket: '',
    },
    {
      id: 'pers-pmk-3',
      nama: 'ADI GESIT SATATA',
      pangkat: 'AIPTU',
      nrp: '72120148',
      jabatan: 'BANIT SAMAPTA',
      ket: '',
    },
    {
      id: 'pers-pmk-4',
      nama: 'WARDOYO',
      pangkat: 'AIPDA',
      nrp: '83101282',
      jabatan: 'BANIT SAMAPTA',
      ket: '',
    },
    {
      id: 'pers-pmk-5',
      nama: 'ERI SETIAWAN',
      pangkat: 'AIPDA',
      nrp: '85081180',
      jabatan: 'BANIT LANTAS',
      ket: '',
    },
    {
      id: 'pers-pmk-6',
      nama: 'ANTON RAHARDJO, SH',
      pangkat: 'AIPTU',
      nrp: '80100908',
      jabatan: 'PS. PANIT OPSNAL INTEL',
      ket: '',
    },
    {
      id: 'pers-pmk-7',
      nama: 'SINGGIH RIYADI',
      pangkat: 'AIPTU',
      nrp: '83070106',
      jabatan: 'PS.PANITOPSNAL 2 UNIT RESKRIM',
      ket: '',
    },
    {
      id: 'pers-pmk-8',
      nama: 'IJMAL AKMAL, SH',
      pangkat: 'AIPDA',
      nrp: '85011391',
      jabatan: 'BANIT RESKRIM',
      ket: '',
    },
    {
      id: 'pers-pmk-9',
      nama: 'ANDI WIBAWA',
      pangkat: 'AIPDA',
      nrp: '84081372',
      jabatan: 'PS.PANIT 1 LANTAS',
      ket: '',
    },
    {
      id: 'pers-pmk-10',
      nama: 'DODIK EKO ARIPRABOWO',
      pangkat: 'AIPDA',
      nrp: '85061749',
      jabatan: 'PS. PANIT 2 BINMAS',
      ket: '',
    },
  ],

  // Pengesahan & Pejabat
  dikeluarkanDi: 'Semarang',
  tanggalSuratHal1: '13       Oktober 2026',
  tanggalSuratHal2: '13       Oktober 2026',
  pejabatJabatan: 'KAPOLSEK SEMARANG SELATAN POLRESTABES SEMARANG',
  pejabatNama: 'RISMANTO,S.H.,M.H.',
  pejabatPangkatNrp: 'KOMISARIS POLISI NRP 73020406',
  showStampAndSignature: true,
  stampResorText: 'POLRI RESOR KOTA BESAR SEMARANG',
  stampSektorText: 'SEKTOR SEMARANG SELATAN',
  stampConfig: { ...DEFAULT_STAMP_CONFIG },
};

export const SPRIN_TEMPLATE_COLLECTION: SprinTemplateItem[] = [
  {
    id: 'tpl-sprin-kryd',
    name: 'SPRIN KRYD (Default)',
    subtitle: 'Sprin/213/X/HUK.6.6./2026 · 7 Personel',
    document: DEFAULT_SPRIN_DOCUMENT,
  },
  {
    id: 'tpl-sprin-olga',
    name: 'SPRIN OLGA',
    subtitle: 'Sprin/196/XI/BIN.2.1./2026 · 3 Personel',
    document: SPRIN_OLGA_DOCUMENT,
  },
  {
    id: 'tpl-sprin-pemakaman',
    name: 'SPRIN PEMAKAMAN',
    subtitle: 'Sprin/164/X/HUK.6.6./2026 · 10 Personel',
    document: SPRIN_PEMAKAMAN_DOCUMENT,
  },
  {
    id: 'tpl-sprin-pensi',
    name: 'SPRIN PENGAMANAN',
    subtitle: 'Sprin/211/XI/HUK.6.6./2026 · 5 Personel',
    document: INITIAL_ARCHIVE_DOCUMENTS[2],
  },
];
