
import { Project, SkillGroup, Experience, Education } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Analyse prédictive marketing bancaire',
    description: 'Analyse approfondie d\'un dataset de 41 188 clients pour optimiser les stratégies de ciblage marketing bancaire.',
    problem: 'Nécessité d\'identifier les clients à fort potentiel de conversion pour maximiser le ROI des campagnes de télémarketing.',
    solution: 'Pipeline de Data Science complet : nettoyage, analyse statistique avancée (Chi², ANOVA, t-test, MANOVA) et modélisation via Random Forest optimisé avec SMOTE pour gérer le déséquilibre des classes.',
    results: 'Performance technique : AUC-ROC de 0.799, Recall de 57%, amélioration du F1-score de +34%. Impact métier : Gain estimé à +700 000€ pour 10 000 contacts via un ciblage prioritaire.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'XGBoost', 'imbalanced-learn', 'Matplotlib'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/Adjakim/projet-analyse-exploiratoire-banking'
  },
  {
    id: '2',
    title: 'Classification d’images Deep Learning',
    description: 'Développement d\'un classificateur d\'images haute performance basé sur l\'univers des Simpsons.',
    problem: 'Classification automatique et précise d\'images parmi 13 classes distinctes dans un environnement de production.',
    solution: 'Architecture de réseaux de neurones convolutionnels (CNN) avec Transfer Learning. Entraînement optimisé sur GPU (Google Colab) sur un dataset équilibré de 11 050 images. Déploiement via une API Flask et une interface React.',
    results: 'Précision exceptionnelle de 98.19%. Système complet incluant un test d\'images en ligne en temps réel.',
    tech: ['Python', 'TensorFlow', 'Keras', 'Flask', 'React', 'Google Colab'],
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/Adjakim/cnn-simpsons-classifier'
  },
  {
    id: '3',
    title: 'Classification ANN',
    description: 'Mise en œuvre d\'un réseau de neurones artificiel pour la classification binaire de données complexes.',
    problem: 'Modélisation de frontières de décision non linéaires sur un dataset de 2000 observations.',
    solution: 'Architecture ANN multicouche avec étapes rigoureuses de nettoyage, encodage des variables et normalisation des données. Visualisation et interprétation des frontières de décision.',
    results: 'Précision proche de 99%. Excellente capacité de généralisation sur les données de test.',
    tech: ['Python', 'Pandas', 'TensorFlow', 'Matplotlib'],
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/Adjakim/RNA_Classification_Binaire_2D'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Data Science & IA',
    skills: [
      { name: 'Python (Pandas, Scikit-learn)', level: 95, icon: 'Code' },
      { name: 'Deep Learning (TensorFlow)', level: 90, icon: 'Brain' },
      { name: 'SQL (MySQL, PostgreSQL)', level: 88, icon: 'Database' },
      { name: 'Analyse Statistique', level: 92, icon: 'BarChart' }
    ]
  },
  {
    category: 'Développement Web',
    skills: [
      { name: 'React / JavaScript', level: 85, icon: 'Layout' },
      { name: 'Flask / Backend', level: 82, icon: 'Server' },
      { name: 'HTML / CSS', level: 90, icon: 'Globe' }
    ]
  },
  {
    category: 'Outils & DevOps',
    skills: [
      { name: 'Git / GitHub', level: 92, icon: 'Github' },
      { name: 'Docker', level: 75, icon: 'Box' },
      { name: 'Google Colab / GPU', level: 88, icon: 'Cpu' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Dakar, Sénégal',
    role: 'Chef de projet Digital',
    period: '2025',
    missions: [
      'Refonte complète d’un site WordPress pour optimiser l\'expérience utilisateur.',
      'Digitalisation du processus d’inscription et gestion sécurisée des données utilisateurs.',
      'Mise en place d’une feuille de route stratégique pour la modernisation technologique.',
      'Conception de supports visuels et de communication digitale.'
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    year: '2025 - 2027',
    institution: 'IPSSI Paris',
    degree: 'Master Data et Intelligence Artificielle',
    details: 'Spécialisation en ingénierie des données et modèles d\'IA avancés.'
  },
  {
    year: '2022 - 2025',
    institution: 'ESP Dakar',
    degree: 'Licence Systèmes Réseaux Télécommunications',
    details: 'Fondamentaux des infrastructures réseaux et des systèmes de communication.'
  }
];
