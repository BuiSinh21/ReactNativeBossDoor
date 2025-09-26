export function formatPhoneNumber(phone: string|undefined): string {

    return phone ? phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3") : "";
}