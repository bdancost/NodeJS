export abstract class HashComparer {
  abstract compare(plain: string): Promise<string>
}
