(ns react-native-web.hooks
  (:require-macros [react-native-web.views :refer [defview letsubs]])
  (:require [react-native-web.react :as react]
            [status-im.colors :as colors]
            [re-frame.core :as re-frame]
            [pluto.core :as pluto]
            [clojure.string :as string]))

(defn wallet-settings-hook [id {:keys [view]} props]
  [react/view {:style {:flex 1}}
   [view props]])

(defn profile-settings-hook [id {:keys [view]} props]
  [react/view {:style {:flex 1}}
   [view props]])

(defn message-container [preview outgoing]
  [react/view
   [react/view {:style {:margin-top     20
                        :flex-direction (if outgoing :row-reverse :row)
                        ;:width          230
                        ;:flex           1
                        :align-self     (if outgoing :flex-end :flex-start)
                        :align-items    (if outgoing :flex-end :flex-start)}}
    [react/view {:style (merge
                         (if outgoing
                           {:margin-left 64}
                           {:margin-right 64})
                         {:flex-direction :column
                          ;:width          230
                          ;:flex           1
                          :padding-left   8
                          :padding-right  8
                          :align-items    (if outgoing :flex-end :flex-start)})}
     [react/view {:style {:flex-direction (if outgoing :row-reverse :row)}}
      [react/view {:style {;:flex               1
                           :padding-vertical   6
                           :padding-horizontal 12
                           :border-radius      8
                           :padding-top        12
                           :padding-bottom     10
                           ;:flex-wrap          :wrap
                           :background-color   (if outgoing colors/blue colors/blue-light)}}
       preview]]]]])

(def input-container
  {:flex-direction :row
   :align-items    :flex-end
   :padding-left   14})

(def send-message-container
  {:background-color colors/blue
   :width            30
   :height           30
   :border-radius    15
   :margin           10
   :align-items :center
   :justify-content :center
   :padding          4
   :margin-left      8
   :margin-bottom    11})

(def send-message-icon
  {:height 22
   :width  22})

(def input-root
  {:padding-top    8
   :padding-bottom 8
   :flex           1})

(def input-animated
  {:align-items    :center
   :flex-direction :row
   :flex-grow      1
   :min-height     36})

(defn rand-str [len]
  (apply str (take len (repeatedly #(char (+ (rand 26) 65))))))

(defview chat-view [preview parameters command-id props on-send on-send-sync]
  (letsubs [{:keys [messages params suggestion-id]} [:get :extension-props]]
    [react/view {:style {:flex 1}}
     [(react/scroll-view) {:style {:flex 1 :background-color :white}}
      [react/view
       (for [{:keys [plain-message] :as message} messages]
         (if plain-message
           [message-container [react/text {:style {:max-width 200 :color :white}} plain-message] true]
           (let [m (fn [out?] (merge {:outgoing out?} message props))]
             ^{:key (str message (rand-str 10))}
             [react/view
              [message-container (when preview (preview (m false))) false]
              [message-container (when preview (preview (m true))) true]])))]]
     (when-let [suggestion (some #(when (= suggestion-id (:id %)) (:suggestions %)) parameters)]
       [react/view {:style {:max-height 300}}
        [suggestion]])
     [react/view {:style input-container}
      [react/view {:style input-root}
       [react/view {:style input-animated}
        [react/text {:style {:border-width 1 :border-color :red}} (str "/" (name command-id) " ")]
        (for [{:keys [placeholder id]} parameters]
          ^{:key (str id placeholder)}
          [react/text-input {:placeholder    placeholder
                             :value          (or (get params id) "")
                             :on-change-text #(re-frame/dispatch [:set-in [:extension-props :params id] %])
                             :on-focus       #(re-frame/dispatch [:set-in [:extension-props :suggestion-id] id])
                             :style          {:margin-right 5 :width 50}}])]]
      [(react/touchable-highlight) {:on-press #(if on-send-sync
                                                 (do
                                                   (on-send-sync {:content {:params params}})
                                                   (re-frame/dispatch [:set-in [:extension-props :suggestion-id] nil])
                                                   (re-frame/dispatch [:set-in [:extension-props :params] nil]))
                                                 (do
                                                   (when on-send (on-send {:content {:params params}}))
                                                   (re-frame/dispatch [:set-in [:extension-props :suggestion-id] nil])
                                                   (re-frame/dispatch [:set-in [:extension-props :params] nil])
                                                   (re-frame/dispatch [:set-in [:extension-props :messages] (conj messages {:content {:params params}})])))}
       [react/view {:style send-message-container}
        [react/text {:style {:color :white}} ">"]
        #_[icons/icon :main-icons/arrow-up {:container-style send-message-icon
                                            :color           :white}]]]]]))

(defn command-hook  [id {:keys [parameters preview on-send on-send-sync]} props]
  [chat-view preview parameters id props on-send on-send-sync])

(defn hook-in [id parsed {:keys [on-installation]} props]
  (when id
    (let [hook-id (last (string/split (name id) #"\."))
          type (pluto/hook-type id)]
      (when on-installation
        (on-installation))
      (case type
        "chat.command" (command-hook hook-id parsed props)
        "wallet.settings" (wallet-settings-hook hook-id parsed props)
        "profile.settings" (profile-settings-hook hook-id parsed props)
        [:div
         (str "Unknown hook type " type)]))))
