import { BacklogManager } from '@/Core/Modules/backlog';
import mitt from 'mitt';
import { SceneManager } from '@/Core/Modules/scene';
import { AnimationManager } from '@/Core/Modules/animations';
import { Gameplay } from './Modules/gamePlay';
import { Events } from '@/Core/Modules/events';

export class WebgalCore {
  public sceneManager = new SceneManager();
  public backlogManager = new BacklogManager(this.sceneManager);
  public animationManager = new AnimationManager();
  public gameplay = new Gameplay();
  public gameName = '';
  public gameKey = '';
  public events = new Events();
  public ConfigData: Record<string, string | boolean | number> = {}; // 存放在config中定义的静态全局变量备份（用于比较更新）
}
