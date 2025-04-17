import React, { useState, useMemo } from 'react';
import { heroes, Hero, Ability } from './data';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAttribute, setSelectedAttribute] = useState<string>('all');
  const [selectedUpgradeType, setSelectedUpgradeType] = useState<string>('all');
  const [selectedAbilityType, setSelectedAbilityType] = useState<string>('all');

  const filteredHeroes = useMemo(() => {
    return heroes.filter(hero => {
      if (searchTerm) {
        const searchTermLower = searchTerm.toLowerCase();
        const heroNameMatch = hero.name.toLowerCase().includes(searchTermLower);
        const abilityNameMatch = hero.abilities.some(ability => 
          ability.name.toLowerCase().includes(searchTermLower)
        );
        
        if (!heroNameMatch && !abilityNameMatch) {
          return false;
        }
      }

      if (selectedAttribute !== 'all' && hero.attribute !== selectedAttribute) {
        return false;
      }

      if (selectedUpgradeType !== 'all') {
        const hasUpgradeType = hero.abilities.some(ability => 
          ability.upgradeType === selectedUpgradeType
        );
        if (!hasUpgradeType) return false;
      }

      if (selectedAbilityType !== 'all') {
        const hasAbilityType = hero.abilities.some(ability => 
          ability.type === selectedAbilityType
        );
        if (!hasAbilityType) return false;
      }

      return true;
    });
  }, [searchTerm, selectedAttribute, selectedUpgradeType, selectedAbilityType]);

  return (
    <div className="app">
      <header className="header">
        <h1>Dota 2 - Information about the visibility of hero abilities</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by hero name or ability..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filters-container">
          <div className="filter">
            <label>Attribute:</label>
            <select 
              value={selectedAttribute}
              onChange={(e) => setSelectedAttribute(e.target.value)}
            >
              <option value="all">All</option>
              <option value="strength">Strength</option>
              <option value="agility">Agility</option>
              <option value="intelligence">Intelligence</option>
              <option value="universal">Universal</option>
            </select>
          </div>
          <div className="filter">
            <label>Type of upgrade:</label>
            <select 
              value={selectedUpgradeType}
              onChange={(e) => setSelectedUpgradeType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Shard">Shard</option>
              <option value="Scepter">Scepter</option>
              <option value="Facet">Facet</option>
            </select>
          </div>
          <div className="filter">
            <label>Type of visibility:</label>
            <select 
              value={selectedAbilityType}
              onChange={(e) => setSelectedAbilityType(e.target.value)}
            >
              <option value="all">All</option>
              <option value="level">Shows the upgrade level</option>
              <option value="upgraded">Shows if upgraded</option>
            </select>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="heroes-grid">
          {filteredHeroes.map((hero) => (
            <HeroCard key={hero.name} hero={hero} />
          ))}
        </div>
      </main>
    </div>
  );
}

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className={`hero-card attribute-${hero.attribute}`}>
      <h2>{hero.name}</h2>
      <div className="abilities-list">
        {hero.abilities.map((ability, index) => (
          <AbilityItem key={`${hero.name}-ability-${index}`} ability={ability} />
        ))}
      </div>
    </div>
  );
};

interface AbilityItemProps {
  ability: Ability;
}

const AbilityItem: React.FC<AbilityItemProps> = ({ ability }) => {
  const visibilityType = ability.type === 'level' ? 'Shows the upgrade level' : 'Shows if upgraded';
  
  let upgradeInfo = '';
  if (ability.upgradeType) {
    switch (ability.upgradeType) {
      case 'Shard':
        upgradeInfo = 'Shard';
        break;
      case 'Scepter':
        upgradeInfo = 'Scepter';
        break;
      case 'Facet':
        upgradeInfo = `Facet${ability.facetName ? ': ' + ability.facetName : ''}`;
        break;
      default:
        upgradeInfo = ability.upgradeType;
    }
  }

  return (
    <div className={`ability-item type-${ability.type}`}>
      <span className="ability-name">{ability.name}</span>
      <div className="ability-details">
        <span className="visibility-type">{visibilityType}</span>
        {upgradeInfo && <span className="upgrade-info">{upgradeInfo}</span>}
      </div>
    </div>
  );
};

export default App;
