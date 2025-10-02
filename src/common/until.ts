import { DetailOrderReport, Services } from "../interfaces/auth";

export function formatPhoneNumber(phone: string | undefined): string {

    return phone ? phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3") : "";
}

export function listOrderServices(arrOrder: DetailOrderReport[] | [], order_id: number): Services[] {
    const order = arrOrder.length > 0 ? arrOrder?.find(item => item.order_id == order_id) : undefined;
    return order ? order.services : [];
}

