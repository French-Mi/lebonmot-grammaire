export interface Reward {
  id: string;
  name: string;
  description: string;
  requiredLevels: number;
  type: 'avatar';
  value: string; // z.B. 'croissant.png'
}

// Die Liste aller freischaltbaren Belohnungen mit .png Endung
export const appRewards: Reward[] = [
  { id: 'avatar-croissant', name: 'Das Croissant', description: 'Ein buttriger Klassiker zum Frühstück.', requiredLevels: 2, type: 'avatar', value: 'croissant.png' },
  { id: 'avatar-eiffeltower', name: 'Der Eiffelturm', description: 'Das unverkennbare Wahrzeichen von Paris.', requiredLevels: 4, type: 'avatar', value: 'eiffeltower.png' },
  { id: 'avatar-beret', name: 'Die Baskenmütze', description: 'Ein Symbol für französische Kunst und Kultur.', requiredLevels: 6, type: 'avatar', value: 'beret.png' },
  { id: 'avatar-sun', name: 'Sonne der Provence', description: 'Einfach die Wärme des Südens.', requiredLevels: 8, type: 'avatar', value: 'sun.png' },
  { id: 'avatar-french-man', name: 'Der Franzose', description: 'Klassisch, mit Schnurrbart und Baskenmütze.', requiredLevels: 10, type: 'avatar', value: 'french-man.png' },
  { id: 'avatar-french-woman', name: 'Die Französin', description: 'Elegant, mit schickem Halstuch.', requiredLevels: 12, type: 'avatar', value: 'french-woman.png' },
  { id: 'avatar-macaron', name: 'Bunte Macarons', description: 'Süße, zarte Mandelbaisers.', requiredLevels: 14, type: 'avatar', value: 'macaron.png' },
  { id: 'avatar-triomphe', name: 'Arc de Triomphe', description: 'Ein monumentales Siegestor.', requiredLevels: 16, type: 'avatar', value: 'triomphe.png' },
  { id: 'avatar-mariniere', name: 'Das Ringelshirt', description: 'Ein zeitloser maritimer Look.', requiredLevels: 18, type: 'avatar', value: 'mariniere.png' },
  { id: 'avatar-sea', name: 'Côte d’Azur', description: 'Das glitzernde Blau des Mittelmeers.', requiredLevels: 20, type: 'avatar', value: 'sea.png' },
  { id: 'avatar-crepe', name: 'Der Crêpe', description: 'Hauchdünn und einfach köstlich.', requiredLevels: 22, type: 'avatar', value: 'crepe.png' },
  { id: 'avatar-louvre', name: 'Die Pyramide', description: 'Moderne Kunst trifft auf Geschichte.', requiredLevels: 24, type: 'avatar', value: 'louvre.png' },
  { id: 'avatar-2cv', name: 'Die Ente (2CV)', description: 'Ein kultiges französisches Auto.', requiredLevels: 26, type: 'avatar', value: '2cv.png' },
  { id: 'avatar-lavender', name: 'Der Lavendel', description: 'Der Duft der provenzalischen Felder.', requiredLevels: 28, type: 'avatar', value: 'lavender.png' },
  { id: 'avatar-mime', name: 'Der Mime', description: 'Kunst, die keine Worte braucht.', requiredLevels: 30, type: 'avatar', value: 'mime.png' },
  { id: 'avatar-cheese', name: 'Der Käse', description: 'Ein Stück französischer Genuss.', requiredLevels: 32, type: 'avatar', value: 'cheese.png' },
  { id: 'avatar-tricolore', name: 'Die Trikolore', description: 'Liberté, Égalité, Fraternité.', requiredLevels: 34, type: 'avatar', value: 'tricolore.png' },
  { id: 'avatar-bicycle', name: 'Das Fahrrad', description: 'Mit Baguette und Blumen im Korb.', requiredLevels: 36, type: 'avatar', value: 'bicycle.png' },
  { id: 'avatar-mont-blanc', name: 'Mont Blanc', description: 'Der höchste Gipfel der Alpen.', requiredLevels: 38, type: 'avatar', value: 'mont-blanc.png' },
  { id: 'avatar-chef', name: 'Der Koch', description: 'Ein Meister der Haute Cuisine.', requiredLevels: 40, type: 'avatar', value: 'chef.png' }
];
