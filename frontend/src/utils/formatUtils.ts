import { Lead } from "../types/Lead";

export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
    };

    return date.toLocaleString('en-US', options)
        .replace(',', '')
        .replace(' ', ' ')
        .replace(' AM', ' am')
        .replace(' PM', ' pm')
        .replace('at', ' @ ');
};


export const formatMoney = (amount: number): string => {
    return 'U' + new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);
};

export const sortLeadsByDate = (leads: Lead[]): Lead[] => {
    return leads.sort((a, b) => new Date(b.dateCreated).getTime() - new Date(a.dateCreated).getTime());
};
