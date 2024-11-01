import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import type { Service } from '@/types/database';

export function useServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServices() {
      try {
        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('id', { ascending: true });

        if (error) throw error;
        setServices(data);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Error fetching services');
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return { services, loading, error };
}