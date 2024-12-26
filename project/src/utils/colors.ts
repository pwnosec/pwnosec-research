export const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    phishing: 'bg-blue-100 text-blue-800',
    ransomware: 'bg-red-100 text-red-800',
    ddos: 'bg-yellow-100 text-yellow-800',
    other: 'bg-gray-100 text-gray-800',
  };

  return typeColors[type] || typeColors.other;
};