import { useState } from 'react';

interface SearchBarProps {
  setDoQuery: React.Dispatch<React.SetStateAction<string | null>>;
}

function SearchBar({ setDoQuery }: SearchBarProps) {