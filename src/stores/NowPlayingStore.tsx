import { create } from 'zustand';
import api from "../service/Api";

interface NowPlayingData {
    station: string | null;
    song: string | null;
}

interface StoreState {
    data: NowPlayingData;
    manualFetch: () => Promise<void>;
}

const useNowPlayingStore = create<StoreState>((set) => {

    const buildEmptyNowPlayingData = () => {
        return {
            station: null,
            song: null,
        };
    }
    const fetchData = async (): Promise<NowPlayingData> => {
        try {
            const response = await api.get('/api/nowPlaying/current'); // Replace with your API endpoint
            return response.data;
        } catch (error) {
            console.error('Failed to fetch data:', error);
            return buildEmptyNowPlayingData();
        }
    };

    // Set an interval to fetch data automatically every 10 seconds
    setInterval(async () => {
        const refreshedData = await fetchData();
        set({ data: refreshedData });
    }, 5000);

    return {
        data: buildEmptyNowPlayingData(),
        manualFetch: async () => {
            const refreshedData = await fetchData();
            set({ data: refreshedData });
        },
    };
});

export default useNowPlayingStore;