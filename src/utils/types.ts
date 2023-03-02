export type Suit = 'spade' | 'club' | 'diamond' | 'heart';
export interface Card {
    rank: number,
    suit: Suit
}

export interface GameResult {
    winner:string;
    playerCount:number;
    compCount:number;

}